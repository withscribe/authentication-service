const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const ora = require('ora')

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
        prisma
    }),
    
});

const options = {
    port: 5000,
    endpoint: '/auth',
    subscriptions: '/sub/auth',
    playground: '/auth/playground'
}

server.start(options, ({ port }) => {
    const spinner = ora().start()
    setTimeout(function() {
        console.log(`Authentication service has started! Open on port: ${port}`)
        spinner.stop()
    }, 1000);
});