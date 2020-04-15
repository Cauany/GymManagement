//All requires
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

//Using middlewares
server.use(express.static('public'))
server.use(routes)

//Setting nunjuck
server.set('view engine', 'njk')

//Configuring nunjucks
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

//Starter server
server.listen(5000, function(){
    console.log('It is running')
})