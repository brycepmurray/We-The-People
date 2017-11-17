var Posts = require('../models/post')
var Comments = require('../models/comment')
var Users = require('../models/user')
var router = require('express').Router()


// POST new post
router.post('/manage-content/posts/', (req, res, next) => {
    req.body.userId = req.session.uid
    Posts.create(req.body)
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


// POST new comment on specific post
router.post('/manage-content/posts/:postId/comments/', (req, res, next) => {
    Comments.create(req.body)
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


// DELETE specific post
// add check: user can only delete own posts
//remember to delete all comments made on parent post
router.delete('/manage-content/posts/:postId', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(post => {
            post.remove()
            res.send({ message: 'Post successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/manage-content/users/:userId', (req, res, next) => {
    Users.findByIdAndRemove(req.params.userId)
        .then(() => {
            res.send({ message: 'User successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


module.exports = router