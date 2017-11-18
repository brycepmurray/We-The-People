function CommentsService() {

    //BACK END
    //***BEGINNING OF SERVER REQUESTS****

    var comments = []

    var baseUrl
    var activePost

    function Comment(config) {
        this.text = config.text.value

    }

    //Error log
    function logError(err) {
        console.error(err)
    }

    //Function to get comments from back-end - takes in draw as cb
    this.getComments = function getComments(cb, post) {
        if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run') }
        baseUrl = `http://localhost:3000/view-content/posts/${post._id}/comments`
        $.get(baseUrl)
            .then(res => {
                comments = res
                cb(comments, post)
            })
            .fail(logError)
    }

    // Function to pull comment by specific ID
    this.getComment = function getComment(id) {
        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i];
            if (id == comment.id) {
                return comment
            }
        }
    }

    this.addComment = function addComment(form, getComments, postId) {
        var newComment = new Comment(form)
        newComment.postId = postId
        console.log('newComment: ', newComment)
        baseUrl = baseUrl.replace('view', 'manage')
        //`http://localhost:3000/view-content/posts/${post._id}/comments`
        $.post(baseUrl, newComment)
            .then(results => {
                getComments(postId)
            })
            .fail(err => {
                logError(err)
            })
    }

    this.removeComment = function removeComment(commentId, postId, getCommentsByPostId) {
        debugger
        console.log(postId)
        baseUrl = `http://localhost:3000/manage-content/posts/${postId}/comments/${commentId}`
        // var url = baseUrl.replace('view', 'manage')
        $.ajax({
            url: baseUrl,
            method: 'DELETE'
            })
            .then(getCommentsByPostId(postId))
            .fail(logError)
    }

    this.getPost = function getPost(postId, cb) {
        $.get(`http://localhost:3000/view-content/posts/${postId}`)
            .then(post => {
                cb(post)
            })
            .catch(logError)
    }

    //FRONT END DUMMY DATA
    // Dummy Data
    // var comments = [
    //     {
    //         text: 'OMG that pic is HILARIOUS!!!!!!'
    //     }, {
    //         text: 'Yeah that is HILARIOUS!'
    //     }
    // ]

    //Public

    // Function to get the posts
    // this.getComments = function getComments() {
    //     return comments
    // }

    // Function to ADD new post
    // this.addComment = function addComment(form) {
    //     var newComment = new Comment(form)
    //     comments.push(newComment)
    // }

    // //***Standard "get by ID function"***
    // this.getComment = function getComment(id) {
    //     for (var i = 0; i < comments.length; i++) {
    //         var comment = comments[i];
    //         if (id == comment.id) {
    //             return comment
    //         }
    //     }
    // }



}