let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);
var connectionString = "mongodb://admin:caligula@ds044709.mlab.com:44709/we-the-posters"

let store = new MongoDBStore(
	{
		uri: connectionString,
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});

module.exports = session({
	secret: 'It puts the lotion in the coconut',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})