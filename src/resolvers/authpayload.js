// resolve the `AuthPayload` type

const account = {

  account: async ({ account: { id } }, args, ctx, info) => {

    return ctx.prisma.query.account({ where: { id } }, info)

  },

}
  
  module.exports = { account }