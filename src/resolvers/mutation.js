const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function register(parent, args, context, info) {
            
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.mutation.createUser({
        data: { 
            email: args.email, 
            password: password,
            remember_me: true
        },
    }, ` { id } `)

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user
    }
}

async function login(parent, args, context, info) {

    const user = await context.prisma.query.user({ where: { email: args.email } }, ` { id, email, password } ` )
    if(!user) {
        throw new Error("No such user found")
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, ` { id } `)

    return {
        token,
        user
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