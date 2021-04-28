document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = event.target.email.value
    const pwd = event.target.pwd.value
    
    fetch
        ('/login', {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
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
