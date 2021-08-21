const express = require('express')
const app = express()

const mongoose = require('./db/mongodb.js')
const User = require('./models/users.js')
const Task = require('./models/tasks.js')
const userRouter = require('./routes/users.js')
const { ObjectId } = require('mongodb')

const port = process.env.PORT | 3000

app.use(userRouter)
app.use(express.json())

app.post('/tasks', async(req, res) => {
    //res.send({text: 'response'})
    console.log(req.body)
    const task = new Task(req.body)
    // console.log(task)
    // task.save().then(() => {
    //     res.send(task)
    // }).catch((error) => {
    //     res.send(error)
    // })
    try {
        await task.save()
        res.status(201).send(task)
    }catch (e) {
        res.send(e)
    }
})

app.listen(port, () => {
    console.log('listen on port ' + port)
})