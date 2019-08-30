var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express_gql = require('express-graphql');
var schema = require('./schema');

var app = express();

app.use('/graphql', express_gql({schema, graphiql: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
module.exports = app;
