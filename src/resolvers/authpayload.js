// resolve the `AuthPayload` type

const account = {
  account: async ({ account: { id } }, args, ctx, info) => {
    return ctx.prisma.account({ where: { id } }, info)
  },
}
  
module.exports = { account }