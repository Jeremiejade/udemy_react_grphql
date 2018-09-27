const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser')

require('dotenv').config({path: 'variables.env' });
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Bring in graphQl-Express middleware
const { graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const { makeExecutableSchema} = require ('graphql-tools')

const { typeDefs} = require('./schema');
const { resolvers} = require('./resolvers');

// create schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// connect to BD
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('DB connected'))
.catch(err=>{console.log(err)});


// initial app
const app = express();

// create Graphiql application
app.use('/graphiql', graphiqlExpress({endpointURL : '/graphql'}));

// Connect schemas with GraphQl
app.use('/graphql',
bodyParser.json(),
 graphiqlExpress({
    schema,

    context:{
       Recipe,
       User 
    }
}))

const PORT = process.env.PORT || 4444;

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
});