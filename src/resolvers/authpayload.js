// resolve the `AuthPayload` type
// Author: Austin Howlett
// Description: Resolves the schema endpoint (the business logic)

const account = {
  account: async ({ account: { id } }, args, ctx, info) => {
    return ctx.prisma.account({ where: { id } }, info)
  },
}

module.exports = { account }