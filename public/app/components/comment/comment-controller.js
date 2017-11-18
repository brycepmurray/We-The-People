function CommentsController() {
    var commentsService = new CommentsService()

    //ID Draws EXISTING Post
    var commentsElem = document.getElementById("comment-id")

    //ID Draws ADDED Posts
    var commentsFormElem = document.getElementById("add-comment-form")

    //Function to get comments from service
    this.getCommentsByPostId = function getCommentsByPostId(postId){
        commentsService.getPost(postId, getComments)
    }
    
    function getComments(post){
        console.log('post in get comments: ', post)
        commentsService.getComments(drawComments, post)
    }
    
    // Function Draws Posts
    function drawComments(comments, post) {
        console.log('post: ', post)
        var template = ''
        template += `
        <div class="row post-top post-width">
        <div class="col-sm-12 text-center panel-heading panel-default well">
            <h3>${post.title}</h3>
            <img class="img-center img-responsive post-img" src="${post.image}">
            <button class="btn btn-primary" onclick="app.controllers.commentsCtrl.getCommentsByPostId('${post._id}')">View Comments</button>
            <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.postCtrl.removePost('${post._id}')"></i>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-4">
            <button type="button" class="btn btn-primary btn-lg btn-right" onclick="app.controllers.commentsCtrl.showAddCommentForm()">Add Comment</button>
        </div>
    </div>
    <div class="row">
    <div class="col-sm-6 col-sm-offset-3 hidden" id="add-comment-form">
        <form class="form" onsubmit="app.controllers.commentsCtrl.addComment(event, '${post._id}')">
            <div class="form-group">
                <input type="text" name="text" class="form-control" placeholder="Text" required>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>
            `
        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i]
            template += `
            <div class="row post-width comment-top">
            <div class="col-sm-12 text-justify panel-body well">
            <p>"USERNAME HERE"</p>
            <button type="button" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-thumbs-up"></span></button>
            <button type="button" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-thumbs-down"></span></button>
            ${comment.text}<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.commentsCtrl.removeComment('${comment._id}', '${post._id}')"></i>
        </div>
        </div>
            `
        }
        template += `
        <button class="btn btn-primary" onclick="app.controllers.postsCtrl.getPosts()">Back</button>
        `
        document.getElementById('post-id').innerHTML = ''
        commentsElem.innerHTML = template
    }

    //Function Adds NEW posts
    this.addComment = function addComment(event, postId) {
        event.preventDefault()
        var form = event.target
        commentsService.addComment(form, this.getCommentsByPostId , postId)
        var commentsFormElem = document.getElementById("add-comment-form")
        commentsFormElem.classList.toggle('hidden', true)
        //drawComments()
    }

    this.removeComment = function removeComment(commentId, postId) {
        debugger
        console.log('post: ', postId)
        commentsService.removeComment(commentId, postId, this.getCommentsByPostId)
    }

    // //Toggles ADD COMMENT FORM
    this.showAddCommentForm = function showAddCommentForm() {
        var commentsFormElem = document.getElementById("add-comment-form")
        commentsFormElem.classList.toggle('hidden')
    }

}