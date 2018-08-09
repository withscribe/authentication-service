const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const AuthPayload = require('./resolvers/authpayload')

const resolvers = {
    Query,
    Mutation,
    AuthPayload
}

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        prisma: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'http://localhost:4469'
        }),
    }),
    
});

const options = {
    port: 5000,
    endpoint: '/auth',
    subscriptions: '/sub/auth',
    playground: '/auth/playground'
}

server.start(options, ({ port }) => console.log(`Auth Server is now running on PORT: ${port}`));