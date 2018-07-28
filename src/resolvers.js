
// *************** DEPRECATED ********************

// module.exports = {
//     Query: {
//         findUserById: (_, args, context, info) => {
//             return context.prisma.query.user(
//                 {
//                     where: {
//                         id: args.id
//                     },
//                 },
//                 info
//             )
//         },
//         findUserByProfileId: (_, ars, context, info) => {
//             return context.prisma.user(
//                 {
//                     where: {
//                         profileID: args.profileID
//                     }, 
//                     info
//                 }
//             )
//         },
//         allUsers: (_, args, context, info) => {
//             return context.prisma.query.users(
//                 _,
//                 info
//             )
//         }

    
//     },
//     Mutation: {
//         createNewUser: (_, args, context, info) => {
//             return context.prisma.mutation.createUser(
//                 {
//                     data: {
//                         email: args.email,
//                         password_hashed: args.password_hashed,
//                         salt: args.salt,
//                         remember_me: args.remember_me,
//                         // account_state: {
//                         //     connect: {
//                         //         id: args.stateId
//                         //     },
//                         // },
//                     },
//                     info
//                 },
//             )
//         },
//         setProfileToUserAccount: (_, args, context, info) => {
//             return context.prisma.mutation.updateUser(
//                 {
//                     where: {
//                         id: args.userId
//                     },
//                     data: {
//                         profileID: args.profileID
//                     },
//                     info
//                 }
//             )
//         },
//     }
// };