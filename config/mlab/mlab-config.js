var mongoose = require('mongoose')
var connectionString = 'mongodb://admin:nero@ds036079.mlab.com:36079/we-the-posters'
var connection = mongoose.connection




mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to We the Posters DataBase')
})