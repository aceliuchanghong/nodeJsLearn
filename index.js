const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan');
const port = 3002
const db = require('./src/config/db/index')

app.use(express.static(path.join(__dirname, 'src/public')))
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get('/0', (req, res) => {
    res.send('Hello World!')
})

//connect mongodb
db.connect()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})