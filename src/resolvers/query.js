const { getAccountId } = require('../utils')


// User specific resolvers

function accountByEmail(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.query.account(
        {
            where: {
                email: args.email
            },
            info
        }
    )
}

// Admin/App specific resolvers

function allAccounts(_, args, context, info) {
    const payload = getAccountId(context)
    return context.prisma.query.accounts(
        _,
        info
    )
}

function accountById(_, args, context, info) {
    const payload = getAccountId(context)

    return context.prisma.query.account(
        {
            where: {
                id: args.id
            },
        },
        info
    )
}

function accountByProfileId (_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.account(
        {
            where: {
                profileID: args.profileID
            }, 
            info
        }
    )
}

function accountsByRole(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.accounts(
        {
            where: {
                OR: [
                    { role_contains: args.role }
                ]
            }
        }
    )
}

function accountsByType(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.accounts(
        {
            where: {
                OR: [
                    { accountType_contains: args.accountType }
                ]
            }
        }
    )
}

function accountsByCountry(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.accounts(
        {
            where: {
                OR: [
                    { country_contains: args.country }
                ]
            }
        }
    )
}

function allStates(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.states(
        _,
        info
    )
}

function roleById(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.role(
        {
            where: {
                id: args.id
            },
            info
        }
    )
}


function allRoles(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.roles(
        _,
        info
    )
}

function allAccountTypes(_, args, context, info) {
    const accountId = getAccountId(context)
    return context.prisma.query.accountTypes(
        _,
        info
    )
}

function accountExists(_, args, context, info) {
    return context.prisma.query.account(
        {
            where: {
                email: args.email
            }, 
            info
        }
    )
}


module.exports = {
    accountByEmail,
    allAccounts,
    accountById,
    accountByProfileId,
    accountsByRole,
    accountsByType,
    accountsByCountry,
    allStates,
    roleById,
    allRoles,
    allAccountTypes,
    accountExists
}