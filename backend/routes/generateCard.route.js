const { Router } = require('express');
const generateCard = require('../controller/generateCard.controller');
const router = Router();

router.post('/generate-card', generateCard);

module.exports = router;