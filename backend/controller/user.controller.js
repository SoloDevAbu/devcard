const axios = require('axios');
const User = require('../db');

const getUserProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const response = await axios.get(
            `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
        );
        res.status(200).json(response.data);
    } catch (err) {
        if (err.response?.status === 429) {
            res.status(429).json({ message: "Too many requests. Please try again later." });
        } else {
            res.status(500).json({ message: "Error fetching data." });
        }
    }
}

const getUserProfileInfo = async (req, res) => {
    const { username } = req.params;

    try {
        const response = await axios.get(
            `https://alfa-leetcode-api.onrender.com/${username}`
        );
        res.status(200).json(response.data)
    } catch (error) {
        if (err.response?.status === 429) {
            res.status(429).json({ message: "Too many requests. Please try again later." });
        } else {
            res.status(500).json({ message: "Error fetching data." });
        }
    }
}

const getUserProfileBadges = async (req, res) => {
    const {username} = req.params;

    try {
        const response = await axios.get(
            `https://alfa-leetcode-api.onrender.com/${username}/badges`
        );

        res.status(200).json(response.data);
    } catch (error) {
        if (err.response?.status === 429) {
            res.status(429).json({ message: "Too many requests. Please try again later." });
        } else {
            res.status(500).json({ message: "Error fetching data." });
        }
    }
}

const createUser = async (req, res) => {
    const {username, avatar, totalSolved, easySolved, mediumSolved, hardSolved} = req.body;

    try {
        const user = await User.findOne({username});

        if(!user) {
            const newUser = await User.create({username, avatar, totalSolved, easySolved, mediumSolved, hardSolved});
        }
        res.status(200).json({
            message: "User created successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: 'Fatching some problem while creating'
        })
    }
}

module.exports = {
    getUserProfile,
    getUserProfileInfo,
    getUserProfileBadges,
    createUser
}