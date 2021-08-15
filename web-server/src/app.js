const path = require('path')
const express = require('express')
app = express()
const hbs = require('hbs')
const { request } = require('http')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const port = process.env.PORT | 3000

const appPath = path.join(__dirname, '../Public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


console.log(partialsPath)

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(appPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'viet le',
        name: 'bitcoin'
    })
})

const person = {
    name: 'viet',
    age: 40
}

app.get('/help', (req, res) => {
    res.send('viet is here')
})

app.get('/about', (req, res) => {
    res.send('LE TRUNG VIET')
})

app.get('/person', (req, res) => {
    res.send(person)
})

app.get('/weather', (req, res) => {
    console.log(req.query.address)
    geocode(req.query.address, (error, { lattitue, longitue } = {}) => {
        if(error)
        {
            console.log(error)
            return res.send(error)
        }

        console.log('lattitude'+ lattitue)
        console.log('longitue' + longitue)

        forecast(longitue,lattitue, (error, forecastdata) => {
            //console.log(forecastdata)
            res.send({
                location: req.query.address,
                forecastdata: forecastdata
            })
        })
    })

})

app.get('/product', (req,res) => {
    console.log(req.query.search + ' - ' + req.query.price)
    res.send(product = {
        name: 'book',
        age: 8
    })
})

app.get('*', (req, res) => {
    res.send('404 Page not found!')
})

app.listen (port, () => {
    console.log('listening @' + port)
})