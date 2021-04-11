var formElement = document.querySelector('form');
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "/api/login");

document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = event.target.username.value
    const pwd = event.target.pwd.value
    
    fetch
        ('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: username,
            pwd: pwd
        }),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})