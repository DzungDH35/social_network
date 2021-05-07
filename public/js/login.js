document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = event.target.email.value
    const pwd = event.target.pwd.value

    fetch
    ('/login', {
        method: 'POST',
        redirect: 'manual',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            pwd: pwd
        }),
    })
        .then(response => {
            console.log(response)
            window.location.href = '/home';
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
