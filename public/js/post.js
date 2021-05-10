function getData() {
    fetch
    ('/post/home/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            response.text().then((data) => {
                console.log(data)
                let list = document.createElement('div');
                list.innerHTML = data;
                document.getElementsByClassName('center')[0].appendChild(list)
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


