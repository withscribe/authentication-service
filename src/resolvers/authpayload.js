// resolve the `AuthPayload` type

const user = {

  user: async ({ user: { id } }, args, ctx, info) => {

    return ctx.prisma.query.user({ where: { id } }, info)

  },

}
  
  module.exports = { user }