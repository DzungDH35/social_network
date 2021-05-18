function getIdCmt(post) {
    var postId = post.getAttribute("data-id");
    console.log(postId);
    var content = document.querySelector("[data-id=" + CSS.escape(postId) + "]").value;
    console.log(content);
    createCmt(postId, content);
    document.querySelector("[data-id=" + CSS.escape(postId) + "]").value = "";
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
            response.text().then(html => {
                let newCmt = document.createElement('div')
                newCmt.innerHTML = html
                document.querySelector("[data-new-cmt-id=" + CSS.escape(postId) + "]").appendChild(newCmt)
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
