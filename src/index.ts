import express, { Express } from 'express'
import { connect } from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolver'

const app: Express = express()
const port = 4000

async function connectDB (): Promise<void> {
  await connect('mongodb://localhost:27017/pos')
}

connectDB()
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => console.log(err))

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers
})

server.start()
  .then(res => {
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(port, () => {
      console.log('Server running at port 4000')
    })
  })
  .catch(err => console.log(err))
