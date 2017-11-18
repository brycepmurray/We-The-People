function CommentsService() {
    //Private

    // Dummy Data
    var comments = [
        {
            text: 'OMG that pic is HILARIOUS!!!!!!'
        }, {
            text: 'Yeah that is HILARIOUS!'
        }
    ]

    //Public

    // Function to get the posts
    this.getComments = function getComments() {
        return comments
    }

    // Function to ADD new post
    this.addComment = function addComment(form) {
        var newComment = new Comment(form)
        comments.push(newComment)
    }

    // //***Standard "get by ID function"***
    // this.getComment = function getComment(id) {
    //     for (var i = 0; i < comments.length; i++) {
    //         var comment = comments[i];
    //         if (id == comment.id) {
    //             return comment
    //         }
    //     }
    // }


    //BACK END
    //***BEGINNING OF SERVER REQUESTS****

// var baseUrl = ""
// var comments = []

// function Comment(config) {
//     this.text = config.text.value
// 
// }

// function logError(err) {
//     console.error(err)
// }

// this.getComments = function getComments(cb) {
//     if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run') }
//     $.get(baseUrl)
//         .then(res => { 
//             comments = res
//             cb(comments)
//         })
//         .fail(logError)
// }

// this.getComment = function getComment(id) {
//     for (var i = 0; i < comments.length; i++) {
//         var comment = comments[i];
//         if (id == comment.id) {
//             return comment
//         }
//     }
// }

// this.addComment = function addComment(form, getComments) {
//     if (!form || !getAutos || typeof getComments != 'function') { return console.error('Unable to add Comment', 'bad parameters', form, getComments) }
//     var newComment = new Comment(form)
//     $.post(baseUrl, newComment)
//         .then(getComments)
//         .fail(logError)
// }

// this.removeComment = function removeComment(index, getComments) {
//     $.ajax({
//         url: baseUrl + '/' + index,
//         method: 'DELETE'
//     })
//         .then(getComments)
//         .fail(logError)
// }


}