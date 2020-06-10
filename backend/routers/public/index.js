const express = require('express');
var router = express.Router();

const Login = require('../../controllers/public/login');
const RegisterUser = require('../../controllers/public/register_user');

router.get('/login',Login.login);
router.post('/register_user',RegisterUser.registerUser)
module.exports = router;   