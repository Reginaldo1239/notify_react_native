const express = require('express');
var router = express.Router();

const Login = require('../../controllers/public/login');
const RegisterUser = require('../../controllers/public/register_user');
const tokenAuth = require('../../controllers/public/token_auth');
//const TokenAuth = require('../../controllers/influencer/token_auth');

router.post('/login',Login.login);
router.post('/register_user',RegisterUser.registerUser)
router.put('/token_auth',tokenAuth.update_code);
module.exports = router;     