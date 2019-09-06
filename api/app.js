var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express_gql = require('express-graphql');
var schema = require('./schema');

var mongoose = require('mongoose');

var app = express();

app.use('/graphql', express_gql({schema, graphiql: true}));


mongoose.connect('mongodb://webappUser:web4ppUser@127.0.0.1:27017');

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
module.exports = app;






