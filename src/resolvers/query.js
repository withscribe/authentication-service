const { verifyToken } = require('../utils')

function accountByEmail(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.account({ email: args.email }, info)
}

function allAccounts(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.accounts(_, info)
}

function accountById(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.account({ id: args.id }, info)
}

async function accountByProfileId (_, args, context, info) {
    const payload = verifyToken(context)
    return await context.prisma.account({ profileId: args.profileId }, info)
}

function accountsByRole(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.accounts({ where: {
                OR: [
                    { role_contains: args.role }
                ]
            }
        }
    )
}

function accountsByCountry(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.accounts({ where: {
                OR: [
                    { country_contains: args.country }
                ]
            }
        }
    )
}

function allStates(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.states(_, info)
}

function roleById(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.role({ id: args.id }, info )
}


function allRoles(_, args, context, info) {
    const payload = verifyToken(context)
    return context.prisma.roles(_, info)
}

function accountExists(_, args, context, info) {
    return context.prisma.account({ email: args.email }, info)
}


module.exports = {
    accountByEmail,
    allAccounts,
    accountById,
    accountByProfileId,
    accountsByRole,
    accountsByCountry,
    allStates,
    roleById,
    allRoles,
    accountExists
}