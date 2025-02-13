const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./global/auth');
const routerPublic = require('./routers/public/index');
const routerInfluencer = require('./routers/influencer/index');
const routerClient  = require('./routers/client/index');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/influencer',auth.auth,routerInfluencer);
app.use('/',routerPublic);
app.use('/client',auth.auth,routerClient);

module.exports =app;
   