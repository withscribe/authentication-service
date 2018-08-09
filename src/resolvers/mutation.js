const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserId } = require('../utils')
const config = require('./config')

// TODO: Need to find a better way to store refresh tokens
const tokenList = {}

async function register(parent, args, context, info) {
    
    // TODO: Generate and encrypt with and store salt
    // const salt = ....

    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.mutation.createUser({
        data: { 
            email: args.email, 
            password: password,
            remember_me: true
        },
    }, ` { id, email } `)

    // TODO: Add secrets to environment variables and read from .env file

    const token = jwt.sign({ userId: user.id, email: user.email, expiresIn: config.tokenLife }, config.secret)
    const refreshToken = jwt.sign({ userId: user.id, email: user.email, expiresIn: config.refreshTokenLife }, config.refreshSecret)
    const status = "Registered/Logged In"
    
    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        user,
        status
    }
}

async function login(parent, args, context, info) {

    const user = await context.prisma.query.user({ where: { email: args.email } }, ` { id, email, password } ` )

    if(!user) {
        throw new Error("No such user found")
    }


    // TODO: Compare using the stored salt

    const valid = await bcrypt.compare(args.password, user.password)

    if(!valid) {
        throw new Error('Invalid password')
    }

    // TODO: Add secrets to environment variables and read from .env file

    const token = jwt.sign({ userId: user.id, email: user.email, expiresIn: config.tokenLife }, config.secret)
    const refreshToken = jwt.sign({ userId: user.id, email: user.email, expiresIn: config.refreshTokenLife }, config.refreshSecret)
    const status = "Logged In"

    const tokensToPersist = {
        "token": token,
        "refreshToken": refreshToken
    }

    tokenList[refreshToken] = tokensToPersist

    return {
        token,
        refreshToken,
        user,
        status
    }
}

async function token(_, args, context, info) {

    if((args.refreshToken) && (args.refreshToken in tokenList)) {

        const user = await context.prisma.query.user({ where: { email: args.email } }, ` { id, email} ` )

        console.log(user)
        const token = jwt.sign({ userId: user.id, email: user.email, expiresIn: config.tokenLife }, config.secret)
        
        console.log(token)
        tokenList[args.refreshToken].token = token;

        return {
            token,
            user
        }

    } else {

        // TODO: Return a proper http response (401)

        throw new Error("Invalid Token")
    }
    

}

function createNewUser(_, args, context, info) {
    // if retrieval of userid is unsuccessfull then an error will throw
    // and the mutation will not be invoked
    const userId = getUserId(context)
    return context.prisma.mutation.createUser(
        {
            data: {
                email: args.email,
                remember_me: args.remember_me,
                // account_state: {
                //     connect: {
                //         id: args.stateId
                //     },
                // },
            },
            info
        },
    )
}

function setProfileToUserAccount(_, args, context, info) {
    return context.prisma.mutation.updateUser(
        {
            where: {
                id: args.userId
            },
            data: {
                profileID: args.profileID
            },
            info
        }
    )
}

module.exports = {
    register,
    login,
    createNewUser,
    setProfileToUserAccount
}