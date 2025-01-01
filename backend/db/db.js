const mongoose = require('mongoose');

mongoose.connect("URL");
const userSchema = new mongoose.Schema({
    userCount: Number,
    default: 0
})

const User = mongoose.model('User', userSchema);

module.exports = User;