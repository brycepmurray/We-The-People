function UsersController() {
    var usersService = new UsersService()

    //ID Draws EXISTING Post
    var usersElem = document.getElementById("user-id")

    //ID Draws ADDED Posts
    var usersFormElem = document.getElementById("add-user-form")

    this.getUserInfo = function getUserInfo(event){
        event.preventDefault()
        var form = event.target
        var user = {
           email: form.email.value,
           password: form.password.value
        }
        usersService.loginUser(user)
    }
    
}