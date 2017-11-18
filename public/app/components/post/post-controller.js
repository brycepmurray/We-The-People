function PostsController() {
    var postsService = new PostsService()

    //ID Draws EXISTING Post
    var postsElem = document.getElementById("post-id")

    //ID Draws ADDED Posts
    var postsFormElem = document.getElementById("add-post-form")

    this.getPosts = function getPosts(posts){
        postsService.getPosts(drawPosts, posts)
    }
    
    // Function Draws Posts
    function drawPosts(posts) {
        var template = ''
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i]
            template += `
            <div class= "row post-top post-width">
            <div class="col-sm-12 text-center panel-heading panel-default well">
            <h3>${post.title}</h3>
            <img class="img-center img-responsive post-img" src="${post.image}">
            <button class="btn btn-primary" onclick="app.controllers.commentsCtrl.getCommentsByPostId('${post._id}')">View Comments</button>
            <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.postsCtrl.removePost('${post._id}')"></i>
            </div>
            </div>
            `
        }
        document.getElementById('comment-id').innerHTML = ''
        postsElem.innerHTML = template
    }

    //Function Adds NEW posts
    this.addPost = function addPost(event) {
        event.preventDefault()
        var form = event.target
        postsService.addPost(form, this.getPosts)
        postsFormElem.classList.toggle('hidden', true)
    }

    // //Toggles ADD POST FORM
    this.showAddPostForm = function showAddPostForm() {
        postsFormElem.classList.toggle('hidden')
    }

    this.removePost = function removePost(postId) {
        debugger
        postsService.removePost(postId, this.getPosts)
    }

    this.getPosts(drawPosts)
}