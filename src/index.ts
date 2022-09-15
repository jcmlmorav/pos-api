import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolver';

const app: Express = express();
const port = 4000;

const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers
});

server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(port, () => {
        console.log('Server running at port 4000');
    });
});
