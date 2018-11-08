const { verifyToken } = require('../utils')

accountByEmail = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ email: args.email }, info)
}

allAccounts = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts(_, info)
}

accountById = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ id: args.id }, info)
}

accountByProfileId = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.account({ profileId: args.profileId }, info)
}

accountsByRole = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts({ where: {
        OR: [
          { role_contains: args.role }
        ]
      }
    }
  )
}

accountsByCountry = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.accounts({ where: {
        OR: [
          { country_contains: args.country }
        ]
      }
    }
  )
}

allStates = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.states(_, info)
}

roleById = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.role({ id: args.id }, info )
}


allRoles = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.roles(_, info)
}

accountExists = async (_, args, context, info) => {
  return await context.prisma.account({ email: args.email }, info)
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