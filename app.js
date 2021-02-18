const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('is this working Hello World!')
})

app.get('/jewelry', (req, res) => {
    res.send('is this working Hello World!')
})

app.get('/jewelry/:item', (req, res) => {
    res.send('is this working Hello World!')
})

module.exports = {
    app
}