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
            <div class="col-sm-12 text-center panel-heading panel-default">
            <h3>${post.title}</h3>
            <img class="img-center" src="${post.img}">
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
        // postsFormElem.classList.toggle('hidden', true)
        drawPosts()
    }

    // //Toggles ADD POST FORM
    // this.showAddPostForm = function showAddPostForm() {
    //     postsFormElem.classList.toggle('hidden')
    // }

    drawPosts()
}