
//Post of friend in home
var x = 1;
function getData() {
    fetch
    (`/post/home/${x}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            response.text().then((data) => {
                let list = document.createElement('div');
                list.innerHTML = data;
                document.getElementsByClassName('center')[0].appendChild(list)
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
window.addEventListener('scroll', () => {
    
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;
    //console.log({scrollTop, scrollHeight, clientHeight});
    if(window.scrollY + window.innerHeight >= scrollHeight){
        x++;
        getData();
    }
})
getData();


// //Post of newpost
// function getDataPost() {
//     fetch
//     ('/post', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then(response => {
//             response.text().then((data) => {
//                 let list = document.createElement('div');
//                 list.innerHTML = data;
//                 document.getElementsByClassName('center')[0].appendChild(list)
//             })
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
// getDataPost();

