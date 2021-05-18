/*
document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    var content = event.target.cmtPost.value
    var postId = document.getElementById("idPost").innerHTML
    console.log(content);
    console.log(postId);
    
    fetch
    ('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postId: postId,
            content: content
        }),
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    event.preventDefault();
        
})
*/
function getIdCmt(post) {
    var postId = post.getAttribute("data-id");
    console.log(postId);
    var content = document.querySelector("[data-id=" + CSS.escape(postId) + "]").value;
    console.log(content);
    createCmt(postId, content);
}

function createCmt(postId, content){
    fetch
    ('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postId: postId,
            content: content
        }),
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
