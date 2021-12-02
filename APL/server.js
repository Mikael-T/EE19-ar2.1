const { request, response } = require('express')
const express = require('express')
const { Liquid } = require('liquidjs')
const app = express()

app.set('view engine', 'Liquid');

app.get('/', (req, res) => {
    console.log('testing testing console')
    res.render('./views')

})

app.listen(3000)