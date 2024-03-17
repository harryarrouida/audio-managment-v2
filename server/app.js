const express = require("express")
const mongoose = require("mongoose")
const {ApolloServer} = require("apollo-server-express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 4000 

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

app.use(cors())
app.use(bodyParser.json())

const server = new ApolloServer({typeDefs, resolvers, debug:true})

mongoose.connect('mongodb+srv://hamzaarr84:snrt@snrtcluster.n1r7yk1.mongodb.net/second?retryWrites=true&w=majority&appName=snrtCluster')
.then(async () => {
    await server.start()
    server.applyMiddleware({app, path: "/graphql"})
    app.listen(port, () => (console.log('server is running')))
})
.catch(err => console.log('connection to mongodb failed: ', err))