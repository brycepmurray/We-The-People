function UsersService() {
    //Private

    // Dummy Data
    var users = [{
        username: 'kcp'
    }]

    //Public

    // Function to get the posts
    this.getUsers = function getUsers() {
        return users
    }

    // Function to ADD new post
    this.addUser = function addUser(form) {
        var newUser = new User(form)
        users.push(newUser)
    }

    // //***Standard "get by ID function"***
    // this.getUser = function getUser(id) {
    //     for (var i = 0; i < users.length; i++) {
    //         var user = users[i];
    //         if (id == user.id) {
    //             return user
    //         }
    //     }
    // }
}