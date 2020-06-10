const express = require('express');
const routerPublic = require('./routers/public/index');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use('/',routerPublic);

module.exports =app;
