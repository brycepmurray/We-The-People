function CommentsController() {
    var commentsService = new CommentsService()

    //ID Draws EXISTING Post
    var commentsElem = document.getElementById("comment-id")

    //ID Draws ADDED Posts
    var commentsFormElem = document.getElementById("add-comment-form")

    // Function Draws Posts
    function drawComments() {
        var comments = commentsService.getComments()
        var template = ''

        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i]
            template += `
            <div class="col-sm-12 text-justify panel-body well">
            <p>${comment.text}</p>
        </div>
            `
        }
        commentsElem.innerHTML = template
    }

    //Function Adds NEW posts
    this.addComment = function addComment(event) {
        event.preventDefault()
        var form = event.target
        commentsService.addComment(form)
        // postsFormElem.classList.toggle('hidden', true)
        drawComments()
    }

    // //Toggles ADD COMMENT FORM
    // this.showAddCommentForm = function showAddCommentForm() {
    //     commentsFormElem.classList.toggle('hidden')
    // }

    drawComments()
}