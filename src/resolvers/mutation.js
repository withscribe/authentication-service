const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../utils')
require('dotenv').config()

// TODO: Need to find a better way to store refresh tokens
const tokenList = {}

async function registerAccount(parent, args, context, info) {
    
    const password = await bcrypt.hash(args.password, 10)

    const account = await context.prisma.createAccount({
        email: args.email, 
        password: password,
        roles: {
            create: [
                {
                    role: "REGULAR",
                    desc: "Default User Role"
                }
            ]
        }
    }, ` { id, email } `)

    const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ accountId: account.id, email: account.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
    
    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        account,
    }
}

async function login(parent, args, context, info) {

    const account = await context.prisma.account({ email: args.email }, ` { id, email, password } ` )

    if(!account) {
        return {
            error: {
                field: 'email',
                msg: 'No User Found'
            }
        }
    }

    // If user wishes to remember login creds, update flag on account
    if(args.rememberMe)
        context.prisma.updateAccount({ where: { id: account.id }, data: { rememberMe: args.rememberMe }})

    // TODO: Make sure bcrypt is all we need

    const valid = await bcrypt.compare(args.password, account.password)

    if(!valid) {
        throw new Error("User Not Found:" + info + " : " + context)
    }


    const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '7d' })
    const refreshToken = jwt.sign({ accountId: account.id, email: account.emaill }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })

    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        account,
    }
}

async function refresh(_, args, context, info) {

    if((args.refreshToken) && (args.refreshToken in tokenList)) {

        const account = await context.prisma.account({ email: args.email }, ` { id, email } ` )

        const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: config.tokenLife })
        
        tokenList[args.refreshToken].token = token;

        return {
            token,
            account
        }

    } else {
        // TODO: Return a proper http response (401)
        throw new Error("Invalid Token:" + info + " : " + context)
    }
    

}

function createAccountConnect(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.createAccount({
        email: args.email,
        password: args.email,
        acountState: args.state,
        country: args.county,
        roles: {
            connect: [
                { id: args.roleId }
            ]
        },
        profileId: args.profileId
    })
}

function createAccountCreate(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.createAccount({
        email: args.email,
        password: args.email,
        acountState: args.state,
        country: args.county,
        role: {
            create: [
                {
                    role: args.role,
                    desc:  args.desc
                }
            ]
        },
        profileId: args.profileId
    })
}

function updateAccountCreate(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.updateAccount(
        {
            where: {
                id: payload.accountId
            },
            data: {
                email: args.email,
                password: args.password,
                accountState: args.state,
                country: args.country,
            },
            info
        },
    )
}

function removeAccount(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.deleteAccount({ id: args.id })
}

    // UNPROTECTED RESOLVER NEEDS ATTENTION!!
async function attachProfileToAccount(_, args, context, info) {
    return await context.prisma.updateAccount({
            where: {
                id: args.accountId
            },
            data: {
                profileID: args.profileID
            },
            info
        })
}

function createRole(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.createRole({
            role: args.role,
            desc: args.desc
        })
}

function updateState(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.updateAccount({
            where: {
                id: args.accountId
            },
            data: {
                accountState: args.state
            }, 
            info
        })
}

function flagAccount(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.updateAccount({
            where: {
                id: args.accountId
            },
            data: {
                accountState: "FLAGGED"
            }
        })
}

function banAccount(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.updateAccount({
            where: {
                id: args.accountId
            },
            data: {
                accountState: "BANNED"
            }
        })
}


module.exports = {
    registerAccount,
    login,
    refresh,
    attachProfileToAccount,
    createAccountConnect,
    createAccountCreate,
    updateAccountCreate,
    removeAccount,
    createRole,
    updateState,
    flagAccount,
    banAccount,
}