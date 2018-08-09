const { getUserId } = require('../utils')

function findUserById(_, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.query.user(
        {
            where: {
                id: args.id
            },
        },
        info
    )
}

function findUserByProfileId (_, ars, context, info) {
    const userId = getUserId(context)
    return context.prisma.user(
        {
            where: {
                profileID: args.profileID
            }, 
            info
        }
    )
}

function allUsers(_, args, context, info) {
    //const userId = getUserId(context)
    return context.prisma.query.users(
        _,
        info
    )
}

module.exports = {
    findUserById,
    findUserByProfileId,
    allUsers
}