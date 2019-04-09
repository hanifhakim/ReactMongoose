const express = require('express')
const port = require('./config/index')
// require('./config/mongoose')

const app = express()
app.use(express.json())

app.listen(port, ()=> console.log('API berhasil running di port', port))