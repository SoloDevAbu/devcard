const { Router } = require('express');
const { getUserProfile, getUserProfileInfo, getUserProfileBadges, createUser } = require('../controller/user.controller');
const router = Router();

router.get('/userProfile/:username', getUserProfile);
router.get('/userProfile/info/:username', getUserProfileInfo);
router.post('/user/:username', createUser);

module.exports = router;