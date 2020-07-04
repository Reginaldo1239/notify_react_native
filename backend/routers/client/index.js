const express = require('express');
const subscriber = require('../../controllers/client/subscriber');
const user = require('../../controllers/client/user');
const influencer = require('../../controllers/client/influencer');
const search = require('../../controllers/client/search');

var router = express.Router();

router.post('/subscriber',subscriber.subscriberSocialnetwork);
router.get('/subscriber',subscriber.listSubscribers);
router.delete('/subscriber',subscriber.unsubscribeSocial);
router.put('/subscriber',subscriber.ChangeStatusNotify)
router.post('/user/alter_password' , user.alterPassword);
router.get('/influencer/search',search.searchInfluencer);
router.get('/influencer/detail',influencer.detailInfluencer);
  
module.exports = router;                    