const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

const { jewelry } = require('./data.js');

app.get('/', (req, res) => {
    // console.log(req);
    res.json({ this: 'message is helloooo' });
})

app.get('/jewelry', (req, res) => {
    // console.log(req);
    res.json({ results: jewelry })
})

app.get('/jewelry/:id', (req, res) => {
    console.log(req);
    const id = Number(req.params.id)
    const jewelryItem = jewelry.find((jewel) => jewel.id === id);

    res.json({ results: jewelryItem });
});

module.exports = {
    app
}