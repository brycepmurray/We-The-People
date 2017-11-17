var mongoose = require('mongoose')
var Comments = require('./comment')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, //url check?
    userId: { type: ObjectId, required: true }
})

schema.pre('remove', function (next) {
    console.log('in pre')
    Comments.remove({ postId: this._id }).exec()
    next()
});

module.exports = mongoose.model('Post', schema)