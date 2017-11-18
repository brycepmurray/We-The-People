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

    //BACK END
    // START OF SERVER REQUESTS

    // var baseUrl = ""
    // var users = []

    // function User(config) {
    //     this.username = config.username.value
    // }

    // function logError(err) {
    //     console.error(err)
    // }

    // this.getUsers = function getUsers(cb) {
    //     if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run') }
    //     $.get(baseUrl)
    //         .then(res => { 
    //             users = res
    //             cb(users)
    //         })
    //         .fail(logError)
    // }

    // this.getUser = function getUser(id) {
    //     for (var i = 0; i < users.length; i++) {
    //         var user = users[i];
    //         if (id == user.id) {
    //             return user
    //         }
    //     }
    // }

    // this.addUser = function addUser(form, getAutos) {
    //     if (!form || !getUsers || typeof getUsers != 'function') { return console.error('Unable to add user', 'bad parameters', form, getUsers) }
    //     var newUser = new User(form)
    //     $.post(baseUrl, newUser)
    //         .then(getUsers)
    //         .fail(logError)
    // }

    // this.removeUser = function removeUser(index, getUsers) {
    //     $.ajax({
    //         url: baseUrl + '/' + index,
    //         method: 'DELETE'
    //     })
    //         .then(getUsers)
    //         .fail(logError)
    // }

}