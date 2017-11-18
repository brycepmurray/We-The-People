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
}