const express = require('express')
const port = require('./config/index')
const cors = require('cors')
const User = require('./models/user')
const Task = require('./models/task')
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
        res.status(400).send(error.message)
        
    }
})

// app.get('/users', async(req,res) =>{
//     const{email, password} = req.query

//     try {
//         const users = await User.findOne({email, password}) 
//         res.status(200).send(users)       
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

app.post('/users/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findByCredentials(email, password) // Function buatan sendiri
        res.status(200).send(user)
    } catch (e) {
        res.status(404).send(e)
    }
})

app.post('/tasks/:userid', async (req, res) => {
    try {
        const user = await User.findById(req.params.userid) // search user by id
        if(!user){ // jika user tidak ditemukan
            throw new Error("Unable to create task")
        }
        const task = new Task({...req.body, owner: user._id}) // membuat task dengan menyisipkan user id di kolom owner
        user.tasks = user.tasks.concat(task._id) // tambahkan id dari task yang dibuat ke dalam field 'tasks' user yg membuat task
        await task.save() // save task
        await user.save() // save user
        res.status(201).send(task)
    } catch (e) {
        res.status(404).send(e)
    }
})



app.listen(port, ()=> console.log('API berhasil running di port', port))