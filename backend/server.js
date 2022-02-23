const express = require('express');
const app = express();
const { chats } = require('./data/data');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const colors = require('colors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('App is running');
})


app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));