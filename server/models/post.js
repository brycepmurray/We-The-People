var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, //url check?
    user: { type: ObjectId, required: true }
})


module.exports = mongoose.model('Post', schema)