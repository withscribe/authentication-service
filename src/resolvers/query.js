const { verifyToken } = require('../utils')
const { accountFragment } = require("../fragments/accountFragment");

accountByEmail = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ email: args.email })
    .$fragment(accountFragment)
}

allAccounts = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts({})
    .$fragment(accountFragment)
}

accountById = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ id: args.id })
    .$fragment(accountFragment)
}

accountByProfileId = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ profileId: args.profileId })
    .$fragment(accountFragment)
}

accountsByRole = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts({ where: {
      OR: [
        { role_contains: args.role }
      ]
    }
  }).$fragment(accountFragment)
}

accountsByCountry = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts({ where: {
      OR: [
        { country_contains: args.country }
      ]
    }
  }).$fragment(accountFragment)
}

allStates = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.states({})
}

roleById = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.role({ id: args.id })
}


allRoles = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.roles({})
}

accountExists = async (_, args, context, info) => {
  return await context.prisma.account({ email: args.email })
    .$fragment(accountFragment)
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