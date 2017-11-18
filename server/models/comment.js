var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    text: { type: String, required: true },
    userId: { type: ObjectId, required: true },
    postId: { type: ObjectId, required: true },
    votes: {}
})

/*

var schema = new mongoose.Schema({
    text: { type: String, required: true },
    userId: { type: ObjectId, required: true },
    postId: { type: ObjectId, required: true },
    upvotes: [],
    downvotes: []
})

*/

module.exports = mongoose.model('Comment', schema)