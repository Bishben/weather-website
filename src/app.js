// NPM MODULES
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// PATH DIRECTORIES FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// HANDLEBAR AND VIEWS PATH
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// STATIC DIRECTORY (css, img, js)
app.use(express.static(publicDirectoryPath))

// GET URLS
app.get('',(req, res) => {
    res.render('ridha')
})

app.get('/bishben',(req, res) => {
    res.render('bishben')
})

app.get('/us',(req, res) => {
    res.render('us')
})

app.get('/us/secret',(req, res) => {
    res.render('secret')
})

app.get('/us/secret/verify',(req, res) => {
    res.send({
        success : verify(req.query.user, req.query.pass)
    })
})

app.get('*',(req,res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})