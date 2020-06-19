const express = require('express');
const TokenAuth = require('../../controllers/influencer/token_auth');

var router = express.Router();

router.post('/token_auth',TokenAuth.initSolicitAuth)
module.exports = router;      