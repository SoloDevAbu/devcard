const express = require("express");
const axios = require("axios");
const cors = require("cors");
const userRoute = require('./router/user.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});