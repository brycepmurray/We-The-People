var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var sessions = require('./auth/sessions')
var port = 3000

//route variables
/*
var userRoutes = require('./auth/auth')
var burgerRoutes = require('./server/routes/burger-routes')
var drinkRoutes = require('./server/routes/drink-routes')
*/

// wants to show burger and drinks and sides 1 request
/*
var menuRoutes = require('./server/routes/menu-routes')
var orderRoutes = require('./server/routes/order-routes')
*/

//register Middleware
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(sessions)

///register routes
/*
server.use(userRoutes)
server.use(menuRoutes)

server.use(Authenticate)

server.use(orderRoutes)
server.use(burgerRoutes)
server.use(drinkRoutes)
*/

function Authenticate(req,res,next){
    if(!req.session.uid){
        return res.status(401).send({error: 'You must login to comment or post.'})
    }
    next()
}

server.listen(port, function(){
    console.log('Server running on: ', port)
})