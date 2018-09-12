const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getAccountId } = require('../utils')
require('dotenv').config()

// TODO: Need to find a better way to store refresh tokens
const tokenList = {}

async function register(parent, args, context, info) {
    
    // TODO: Generate and encrypt with and store salt
    // const salt = ....

    const password = await bcrypt.hash(args.password, 10)

    const account = await context.prisma.mutation.createAccount({
        data: { 
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
        },
    }, ` { id, email } `)

    const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ accountId: account.id, email: account.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
    const status = "Registered/Logged In"
    
    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        account,
        status
    }
}

async function login(parent, args, context, info) {

    const account = await context.prisma.query.account({ where: { email: args.email } }, ` { id, email, password } ` )

    if(!account) {
        return {
            error: {
                field: 'email',
                msg: 'No User Found'
            }
        }
    }

    if(args.rememberMe)
        context.prisma.mutation.updateAccount({ where: { id: account.id }, data: { rememberMe: args.rememberMe }})


    // TODO: Compare using the stored salt

    const valid = await bcrypt.compare(args.password, account.password)

    if(!valid) {
        return {
            error: {
                field: 'password',
                msg: 'Invalid Password'
            }
        }
    }


    const token = jwt.sign({ accountId: account.id, email: account.email }, process.env.TOKEN_SECRET, { expiresIn: '7d' })
    const refreshToken = jwt.sign({ accountId: account.id, email: account.emaill }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
    const status = "Logged In"

    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        account,
        status
    }
}

async function refresh(_, args, context, info) {

    if((args.refreshToken) && (args.refreshToken in tokenList)) {

        const account = await context.prisma.query.account({ where: { email: args.email } }, ` { id, email} ` )

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
    // if retrieval of userid is unsuccessfull then an error will throw
    // and the mutation will not be invoked
    const payload = getAccountId(context)
    return context.prisma.mutation.createAccount(
        {
            data: {
                email: args.email,
                password: args.email,
                acountState: args.state,
                accountType: args.accountType,
                country: args.county,
                roles: {
                    connect: [
                        { id: args.roleId }
                    ]
                },
                profileId: args.profileId
            },
            info
        },
    )
}

function createAccountCreate(_, args, context, info) {
    // if retrieval of userid is unsuccessfull then an error will throw
    // and the mutation will not be invoked
    const payload = getAccountId(context)
    return context.prisma.mutation.createAccount(
        {
            data: {
                email: args.email,
                password: args.email,
                acountState: args.state,
                accountType: args.accountType,
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
            },
            info
        },
    )
}

function updateAccount(_, args, context, info) {
    // if retrieval of userid is unsuccessfull then an error will throw
    // and the mutation will not be invoked
    const payload = getAccountId(context)

    return  context.prisma.mutation.updateAccount(
        {
            where: {
                id: args.accountId
            },
            data: {
                email: args.email,
                password: args.email,
                accountState: args.state,
                accountType: args.accountType,
                country: args.country,
                // roles: {
                //     connect: [
                //         { id: args.roleId }
                //     ]
                // },
                //profileId: args.profileId
            },
            info
        },
    )
}

function removeAccount(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.deleteAccount(
        {
            where: {
                OR: [
                    { id: args.id },
                    { email: args.email }
                ]
            }
        }
    )
}

function setProfileToAccount(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.updateAccount(
        {
            where: {
                id: args.accountId
            },
            data: {
                profileID: args.profileID
            },
            info
        }
    )
}

function createRole(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.createRole(
        {
            data: {
                role: args.role,
                desc: args.desc
            },
            info
        }
    )
}

function updateState(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.updateAccount(
        {
            where: {
                id: args.accountId
            },
            data: {
                accountState: args.state
            }, 
            info
        }
    )
}

function flagAccount(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.updateAccount(
        {
            where: {
                id: args.accountId
            },
            data: {
                accountState: "FLAGGED"
            }
        }
    )
}

function banAccount(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.mutation.updateAccount(
        {
            where: {
                id: args.accountId
            },
            data: {
                accountState: "BANNED"
            }
        }
    )
}


module.exports = {
    register,
    login,
    refresh,
    setProfileToAccount,
    createAccountConnect,
    createAccountCreate,
    updateAccount,
    removeAccount,
    createRole,
    updateState,
    flagAccount,
    banAccount,
}