function UsersController() {
    var usersService = new UsersService()

    //ID Draws EXISTING Post
    var usersElem = document.getElementById("comment-id")

    //ID Draws ADDED Posts
    var usersFormElem = document.getElementById("add-comment-form")

    // Function Draws Posts
    // function drawUsers() {
    //     var users = usersService.getUsers()
    //     var template = ''

    //     for (var i = 0; i < users.length; i++) {
    //         var user = users[i]
    //         template += `
    //         <div class="col-sm-12 text-justify panel-body well">
    //         <p>${user.text}</p>
    //     </div>
    //         `
    //     }
    //     usersElem.innerHTML = template
    // }

    //Function Adds NEW posts
    this.addUser = function addUser(event) {
        event.preventDefault()
        var form = event.target
        usersService.addUser(form)
        // postsFormElem.classList.toggle('hidden', true)
        drawUsers()
    }

    // //Toggles ADD COMMENT FORM
    // this.showAddUserForm = function showAddUserForm() {
    //     usersFormElem.classList.toggle('hidden')
    // }

    drawUsers()
}