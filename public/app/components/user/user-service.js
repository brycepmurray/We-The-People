function UsersService() {
    
    //BACK END
    // START OF SERVER REQUESTS
    var activeUserId

    var registerUrl = 'http://localhost:3000/register'
    var loginUrl = 'http://localhost:3000/login'
    var users = []

    function User(config) {
        this.username = config.username.value
        this.email = config.email.value
        this.password = config.password.value
    }

    function logError(err) {
        console.error(err)
    }

    this.getActiveUserId = function() {
        return activeUserId
    }

    // this.getUserInfo = function getUserInfo(user) {
    //     // if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run') }
    //     $.get(loginUrl)
    //         .then(res => { 

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

    // this.registerUser = function registerUser(form) {
    //     if (!form || !getUsers || typeof getUsers != 'function') { return console.error('Unable to add user', 'bad parameters', form) }
    //     var newUser = new User(form)
    //     $.post(registerUrl, newUser)
    //         .then(drawUser)
    //         .fail(logError)
    // }

    this.loginUser = function loginUser(user) {
        // if (!form || !getUsers || typeof getUsers != 'function') { return console.error('Unable to add user', 'bad parameters', form) }
        // var newUser = new User(form)
        $.post(loginUrl, user)
            .then(function(res) {
                console.log('login response: ', res)
                activeUserId = res.data._id
            })
            .fail(logError)
    }

    // this.logoutUser = function removeUser(index, getUsers) {
    //     $.ajax({
    //         url: baseUrl + '/' + index,
    //         method: 'DELETE'
    //     })
    //         .then(getUsers)
    //         .fail(logError)
    // }


    //FRONT END
    //Private

    // Dummy Data
    // var users = [{
    //     username: 'kcp'
    // }]

    //Public

    // Function to get the posts
    // this.getUsers = function getUsers() {
    //     return users
    // }

    // Function to ADD new post
    // this.addUser = function addUser(form) {
    //     var newUser = new User(form)
    //     users.push(newUser)
    // }

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