const express = require('express')
const cors = require('cors')
const route = require('./routes')
const port = 3030

let app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', route)

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
})

module.exports = app