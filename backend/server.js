const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/userProfile/:username", async (req, res) => {
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
});

app.get('/api/userProfile/info/:username', async (req,res) => {
    const {username} = req.params;

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
})

app.get('api/userProfile/badges/:username', async (req, res) => {
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
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});