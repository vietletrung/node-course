const express = require('express')
const app = express()

const mongoose = require('./db/mongodb.js')
const User = require('./models/users.js')
const Task = require('./models/tasks.js')

const port = process.env.PORT | 3000

app.use(express.json())

app.post('/users', (req, res) => {
    //res.send({text: 'response'})
    console.log(req.body)
    const user = new User(req.body)
    console.log(user)
    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        res.send(error)
    })
})

app.post('/tasks', (req, res) => {
    //res.send({text: 'response'})
    console.log(req.body)
    const task = new Task(req.body)
    console.log(task)
    task.save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.send(error)
    })
})

app.get('/users', (req,res) => {
    User.find({}). then((users) => {
        res.send(users)
    }).catch(e => res.send('application error 500'))
})

app.get('/user/:id', (req,res) => {
    const _id = req.params.id
    console.log(_id)
    User.findById(_id). then((user) => {
        if(user) {
            res.send(user)
        }
        else res.send('user not found 404')
    }).catch(e => res.send('application error 500'))
})


app.listen(port, () => {
    console.log('listen on port ' + port)
})