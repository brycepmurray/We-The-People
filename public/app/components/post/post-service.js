function PostsService() {
    //Private

    // Dummy Data
    var posts = [
        {
            title: 'HILARIOUS picture of numbers!',
            img: '//placehold.it/500x500'
        }
    ]

    //Public

    // Function to get the posts
    this.getPosts = function getPosts() {
        return posts
    }

    // Function to ADD new post
    this.addPost = function addPost(form) {
        var newPost = new Post(form)
        posts.push(newPost)
    }

    // //***Standard "get by ID function"***
    // this.getPost = function getPost(id) {
    //     for (var i = 0; i < posts.length; i++) {
    //         var post = posts[i];
    //         if (id == post.id) {
    //             return post
    //         }
    //     }
    // }



    //BACK END
    //BEGINNING OF SERVER REQUESTS

    // var baseUrl = ""
    // var posts = []

    // function Post(config) {
    //     this.title = config.title.value
    //     this.img = config.img.value
    // }

    // function logError(err) {
    //     console.error(err)
    // }

    // this.getPosts = function getPosts(cb) {
    //     if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run') }
    //     $.get(baseUrl)
    //         .then(res => { 
    //             posts = res
    //             cb(posts)
    //         })
    //         .fail(logError)
    // }

    // this.getPost = function getPost(id) {
    //     for (var i = 0; i < posts.length; i++) {
    //         var post = posts[i];
    //         if (id == post.id) {
    //             return post
    //         }
    //     }
    // }

    // this.addPost = function addPost(form, getPosts) {
    //     if (!form || !getPosts || typeof getPosts != 'function') { return console.error('Unable to add post', 'bad parameters', form, getPosts) }
    //     var newPost = new Post(form)
    //     $.post(baseUrl, newPost)
    //         .then(getPosts)
    //         .fail(logError)
    // }

    // this.removePost = function removePost(index, getPosts) {
    //     $.ajax({
    //         url: baseUrl + '/' + index,
    //         method: 'DELETE'
    //     })
    //         .then(getPosts)
    //         .fail(logError)
    // }
}