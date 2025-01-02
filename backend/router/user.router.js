const { Router } = require('express');
const { getUserProfile, getUserProfileInfo, getUserProfileBadges, createUser } = require('../controller/user.controller');
const router = Router();

router.get('/userProfile/:username', getUserProfile);
router.get('/userProfile/info/:username', getUserProfileInfo);
router.get('/userProfile/badges/:username', getUserProfileBadges);
router.post('/user', createUser);

module.exports = router;