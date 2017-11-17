var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: ObjectId, required: true },
    post: { type: ObjectId, required: true },
    votes: {}
})


module.exports = mongoose.model('Comment', schema)