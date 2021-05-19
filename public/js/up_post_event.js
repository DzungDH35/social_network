document.getElementById('form').addEventListener("submit", async function (event) {

    event.preventDefault();
    var content = event.target.contentPost.value
    var img  = srcImage;
    fetch
    ('/post', {
        method: 'POST',
        redirect: 'manual',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: content,
            img: img
        }),
    })
        .then(response => {
            console.log(response)
            window.location.href = '/home';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    event.preventDefault();
})


