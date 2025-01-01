const express = require('express');
const cors = require('cors');
const mainRoute = require('./routes/user')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/user', mainRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Started at Port")
})