document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = event.target.username.value
    const pwd = event.target.pwd.value
    
    fetch
        ('/login', {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: username,
            pwd: pwd
        }),
        })
        .then(response => { 
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
})