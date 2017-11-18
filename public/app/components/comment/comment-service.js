function CommentsService() {

    //BACK END
    //***BEGINNING OF SERVER REQUESTS****
    
    var comments = []
    
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
        var baseUrl = `http://localhost:3000/view-content/posts/${post._id}/comments`
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

    this.addComment = function addComment(form, getComments) {
        debugger
        var newComment = new Comment(form)
        var baseUrl = `http://localhost:3000/view-content/posts/${post._id}/comments`
        $.post(baseUrl, newComment)
            .then(getComments)
            .fail(logError)
    }

    this.removeComment = function removeComment(index, getComments) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getComments)
            .fail(logError)
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