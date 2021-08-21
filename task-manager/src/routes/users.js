const express = require('express')
const User = require('../models/users.js')
//const app = new express()

const router = new express.Router()

router.post('/users', (req, res) => {
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


router.get('/users', async(req,res) => {
    // User.find({}). then((users) => {
    //     res.send(users)
    // }).catch(e => res.send('application error 500'))
    try {
        const users = await User.find({})
        res.send(users)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.get('/user/:id', async(req,res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user)
        {
            res.status(404).send('user not found')
        }
        res.send(user)
    }catch (e){
        res.status(500).send('application error')
    }
})

router.patch('/user/:id', async(req,res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowUpdates = ['age', 'name']

    const isValidOperation = updates.every((update) => allowUpdates.includes(updates))
    if(!isValidOperation) {
        return res.status(400).send('invalid update')
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new:true, runValidators: true})
        if(!user) {
            res.status(404).send('can not find the user')
        }

        return res.status(200).send(user)
    }catch(e) {
        return res.status(500).send('application error')
    }
})

module.exports = router