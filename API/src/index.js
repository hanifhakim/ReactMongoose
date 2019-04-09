const express = require('express')
const port = require('./config/index')
const cors = require('cors')
const User = require('./models/user')
require('./config/mongoose')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/users', async(req,res) =>{
    const user = new User(req.body)

    try {
        await user.save() 
        res.status(200).send(user)       
    } catch (error) {
        res.status(400).send(error)
    }
})




app.listen(port, ()=> console.log('API berhasil running di port', port))