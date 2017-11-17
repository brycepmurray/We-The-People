//Better way to handle requests in one route? => req.body.userId = req.session.uid (inside http request)
/*
var Post = require('../models/post')
var Comments = require('../models/comment')
var router = require('express').Router()

// GET all posts
router.get('/view-content/posts', (req, res, next)=>{
    Posts.find({})
        .then(posts =>{
            res.send(posts)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

//GET single post by id
router.get('/view-content/posts/:postId', (req, res, next)=>{
    Posts.findById(req.params.postId)
        .then(post=>{
            res.send(post)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

//GET all comments on single post
router.get('/view-content/posts/:postId/comments', (req, res, next)=>{
    Posts.findById(req.params.postId)
        .then(()=>{ // don't need to pass in post here?
            Comments.find(req.params.postId) // Need to access postId prop on Comment, not id of Comment itself
            .then(comments=>{
                res.send(comments)
            })
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/view-content/posts/:postId/comments/:commentId', (req, res, next)=>{
    Posts.findById(req.params.postId)
        .then(()=>{ // don't need to pass in post here?
            Comments.findById(req.params.commentId)
            .then(comments=>{
                res.send(comments)
            })
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})











router.post('/api/posts', (req, res, next)=>{
    Posts.create(req.body)
        .then(post => {
            let response = {
                data: post,
                message: 'Successfully created Post!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


router.put('/api/posts/:id', (req, res, next)=>{
    var action = 'Update Post'
    Posts.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(handleResponse(action, data))
        })
        .catch(err =>{
            res.status(400).send(handleResponse(action, null, err))
        })
})


router.delete('/api/posts/:id', (req, res, next)=>{
    Posts.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that post'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

function handleResponse(action, data, error){
    var response =  {
        message: action,
        data: data
    }
    if(error){
        response.error = error
    }
    return response
}


module.exports = router
*/