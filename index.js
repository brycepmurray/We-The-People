var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var sessions = require('./auth/sessions')
var port = 3000

//route variables

var userRoutes = require('./auth/auth')
var viewContentRoutes = require('./server/routes/view-content-routes')
var manageContentRoutes = require('./server/routes/manage-content-routes')

//register Middleware
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(sessions)


server.use(express.static(__dirname + '/public'))
///register routes

server.use(userRoutes)
server.use(viewContentRoutes)
server.use(Authenticate)
server.use(manageContentRoutes)

function Authenticate(req,res,next){
    if(!req.session.uid){
        return res.status(401).send({error: 'You must login to comment or post.'})
    }
    next()
}

server.listen(port, function(){
    console.log('Server running on: ', port)
})