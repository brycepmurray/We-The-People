function UsersController() {
    var usersService = new UsersService()

    //ID Draws EXISTING Post
    var usersElem = document.getElementById("user-id")

    //ID Draws ADDED Posts
    var usersFormElem = document.getElementById("add-user-form")

    this.getUserInfo = function getUserInfo(event){
        debugger
        event.preventDefault()
        var form = event.target
        var user = {
           email: form.email.value,
           password: form.password.value
        }
        usersService.loginUser(user)
    }



    // Function Draws Posts
    // function drawUsers() {
    //     var users = usersService.getUsers()
    //     var template = ''

    //     for (var i = 0; i < users.length; i++) {
    //         var user = users[i]
    //         template += `
    //         <div class="col-sm-12 text-justify panel-body well">
    //         <p>${users.username}</p>
    //         </div>
    //         `
    //     }
    //     usersElem.innerHTML = template
    // }

    //Function Adds NEW posts
    // this.loginUser = function loginUser(event) {
    //     debugger
    //     event.preventDefault()
    //     var form = event.target
    //     usersService.loginUser(form)
    // }

  





    // drawUsers()
}