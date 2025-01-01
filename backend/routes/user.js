const { Router } = require('express');
const User = require('../db/db');
const router = Router();

router.post('/count')