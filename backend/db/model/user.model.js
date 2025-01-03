const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
    username: String,
    avatar: String,
    totalSolved: Number,
    easySolved: Number,
    mediumSolved: Number,
    hardSolved: Number,
})

module.exports = userChema;