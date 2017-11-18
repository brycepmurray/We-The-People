function PostsController() {
    var postsService = new PostsService()

    //ID Draws EXISTING Post
    var postsElem = document.getElementById("post-id")

    //ID Draws ADDED Posts
    var postsFormElem = document.getElementById("add-post-form")

    // Function Draws Posts
    function drawPosts() {
        var posts = postsService.getPosts()
        var template = ''

        for (var i = 0; i < posts.length; i++) {
            var post = posts[i]
            template += `
            <div class= "row post-top post-width">
            <div class="col-sm-12 text-center panel-heading panel-default well">
            <h3>${post.title}</h3>
            <img class="img-center img-responsive post-img" src="${post.img}">
            <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.postCtrl.removePost(${i})"></i>
            </div>
            </div>
            `
        }
        postsElem.innerHTML = template
    }

    //Function Adds NEW posts
    this.addPost = function addPost(event) {
        event.preventDefault()
        var form = event.target
        postsService.addPost(form)
        postsFormElem.classList.toggle('hidden', true)
        drawPosts()
    }

    // //Toggles ADD POST FORM
    this.showAddPostForm = function showAddPostForm() {
        postsFormElem.classList.toggle('hidden')
    }

    drawPosts()
}