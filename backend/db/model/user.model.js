const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
    username: String,
    name: String,
    avatar: String,
    ranking: Number,
    reputation: String,
    totalSolved: Number,
    easySolved: Number,
    mediumSolved: Number,
    hardSolved: Number,
})

module.exports = userChema;