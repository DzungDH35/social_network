var formElement = document.querySelector('form');
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "/api/login");

function login(){
    request.open("POST", "/api/login");
    request.send(formData);
}

formElement.addEventListener('submit', login)