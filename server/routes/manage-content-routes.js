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
    req.body.userId = req.session.uid
    Comments.create(req.body)
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// DELETE specific post
router.delete('/manage-content/posts/:postId', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(post => {
            console.log('1', post.userId.toString())
            console.log('2', req.session.uid.toString())
            console.log('3', post.userId.toString() == req.session.uid.toString())
            if (!(post.userId.toString() == req.session.uid.toString())) {
                return
            }
            post.remove()
            res.send({ message: 'Post successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: "Cannot delete content posted by another user." })
        })
})

router.delete('/manage-content/posts/:postId/comments/:commentId', (req, res, next) => {
    Posts.findById(req.params.postId)
        .then(() => {
            Comments.findById(req.params.commentId)
                .then(comment => {
                    console.log('1', comment.userId.toString())
                    console.log('2', req.session.uid.toString())
                    console.log('3', comment.userId.toString() == req.session.uid.toString())
                    if (!(comment.userId.toString() == req.session.uid.toString())) {
                        console.log('4 made it.')
                        return res.status(400).send({ Error: "Cannot delete content posted by another user." })
                    }
                    comment.remove()
                    console.log('5 made it again.')
                    res.send({ message: 'Comment successfully deleted.' })
                })
                .catch(err => {
                    res.status(400).send({ Error: err })
                })
        })
        .catch(err => {
            res.status(400).send({ Error: "WHAT DID YOU DO!?" })
        })
})

// DELETE own user record
router.delete('/manage-content/users/:userId', (req, res, next) => {
    Users.findById(req.params.userId)
        .then(user => {
            console.log('1', user._id.toString())
            console.log('2', req.session.uid.toString())
            console.log('3', user._id.toString() == req.session.uid.toString())
            if (!(user._id.toString() == req.session.uid.toString())) {
                return
            }
            user.remove()
            res.send({ message: 'User successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

/*
Voting
    - targeting comment a given id
    - if `votes` has no key matching userId:
        - no vote has been recorded, so create key = userId and value = "up" ||  "down"
    - else if `votes` has key matching userId:
        - if votes[type] == type sent by user, do nothing
        - if votes[type] != type sent by user, replace with new vote
*/

router.put('/manage-content/posts/:postId/comments/:commentId', (req, res, next) => {
    console.log('req.body: ', req.body)
    Comments.findById(req.params.commentId)
        .then( comment => {
            comment.votes[req.session.uid] = req.body.value
            Comments.update(comment)
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

/*

router.put('/manage-content/posts/:postId/comments/:commentId', (req, res, next) => {
    console.log('req.body: ', req.body)
    Comments.findById(req.params.commentId)
        .then( comment => {
            if (req.body.value === 1) {
                if (!comment.upvotes.includes(req.session.uid)) {
                    comment.upvotes.push(req.session.uid)
                }
                if (comment.downvotes.includes(req.session.uid)) {
                    comment.downvotes.splice(comment.downvotes.indexOf(req.session.uid), 1)
                }
            }
            if (req.body.value === -1) {
                if (!comment.downvotes.includes(req.session.uid)) {
                    comment.downvotes.push(req.session.uid)
                }
                if (comment.upvotes.includes(req.session.uid)) {
                    comment.upvotes.splice(comment.upvotes.indexOf(req.session.uid), 1)
                }
            }
            Comments.update(comment)
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

*/

module.exports = router