function CommentsService() {
    //Private

    // Dummy Data
    var comments = [
        {
        text: 'OMG that pic is HILARIOUS!!!!!!'
        },{
        text: 'Yeah that is HILARIOUS!'
        }
]

    //Public

    // Function to get the posts
    this.getComments = function getComments() {
        return comments
    }

    // Function to ADD new post
    this.addComment = function addComment(form) {
        var newComment = new Comment(form)
        comments.push(newComment)
    }

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