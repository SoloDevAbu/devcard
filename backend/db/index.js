const mongoose = require('mongoose');
const userChema = require('./model/user.model');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const User = mongoose.model('User', userChema);

module.exports = User;