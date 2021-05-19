// var x = 1;
// function getData(x) {
//     fetch
//     (`/post/home/${x}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then(response => {
//             response.text().then((data) => {
//                 console.log(data)
//                 let list = document.createElement('div');
//                 list.innerHTML = data;
//                 document.getElementsByClassName('center')[0].appendChild(list)
//             })
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
// getData(x);
// window.addEventListener('scroll', () => {
    
//     const { scrollTop, scrollHeight, clientHeight} = document.documentElement;
//     console.log({scrollTop, scrollHeight, clientHeight});
//     if(window.scrollY + window.innerHeight >= scrollHeight){
//         console.log("to the bottom");
//         x++;
//         console.log(x);
//         getData(x);
//     }
// })

//Post of newpost
function getDataPost() {
    fetch
    ('/post', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            response.text().then((data) => {
                let list = document.createElement('div');
                list.innerHTML = data;
                document.getElementsByClassName('post')[0].appendChild(list)
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
getDataPost();