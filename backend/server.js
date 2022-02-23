const express = require('express');
const app = express();
const { chats } = require('./data/data');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('App is running');
})

app.get('/api/chat', (req, res) => {
    res.json(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.json(singleChat);
})

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));