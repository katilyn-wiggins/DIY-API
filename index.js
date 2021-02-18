const { app } = require('./app.js');
const port = 3000


app.listen(port, () => {
    console.log(`Ok our code is running now! Example app listening at http://localhost:${port}`)
})

