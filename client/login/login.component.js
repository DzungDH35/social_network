var formElement = document.querySelector('form');
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "/api/login");

function login(){
    request.open("POST", "/api/login");
    request.send(formData);
}

fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username, pwd
    })
}).then(res => res.json()).then(data => {
    console.log(data);
})

document.getElementById('loginbtn').onclick = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('pwd');
}


formElement.addEventListener('submit', login)