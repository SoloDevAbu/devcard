const { Router } = require('express');
const { getUserProfile, getUserProfileInfo, getUserProfileBadges, createUser } = require('../controller/user.controller');
const router = Router();

router.get('/userProfile/:username', getUserProfile);
router.get('/api/userProfile/info/:username', getUserProfileInfo);
router.get('api/userProfile/badges/:username', getUserProfileBadges);
router.post('api/user', createUser);

module.exports = router;