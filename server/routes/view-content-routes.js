var Posts = require('../models/post')
var Comments = require('../models/comment')
var router = require('express').Router()

// GET all posts
router.get('/view-content/posts', (req, res, next) => {
    Posts.find({})
        .then(posts => {
            res.send(posts)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

//GET single post by id
router.get('/view-content/posts/:postId', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

//GET all comments on single post
router.get('/view-content/posts/:postId/comments', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(() => { // don't need to pass in post here?
            Comments.find({ postId: req.params.postId }) // Need to access postId prop on Comment, not id of Comment itself
                .then(comments => {
                    res.send(comments)
                })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/view-content/posts/:postId/comments/:commentId', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(() => { // don't need to pass in post here
            Comments.findById(req.params.commentId)
                .then(comment => {
                    res.send(comment)
                })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

module.exports = router
