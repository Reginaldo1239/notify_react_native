const express = require('express');
const subscriber = require('../../controllers/client/subscriber');
const user = require('../../controllers/client/user');

var router = express.Router();

router.post('/subscriber',subscriber.subscriberSocialnetwork);
router.get('/subscriber',subscriber.listSubscribers);
router.delete('/subscriber',subscriber.unsubscribeSocial);
router.post('/user/alter_password' , user.alterPassword);
module.exports = router;             