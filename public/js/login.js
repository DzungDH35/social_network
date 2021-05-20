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
            if(response.status == 200){
                window.location.href = '/home';
            }else{
                document.getElementById("error").innerHTML = "Mật khẩu bạn đã nhập không chính xác.";
                console.log("Login Error!");
            } 
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
