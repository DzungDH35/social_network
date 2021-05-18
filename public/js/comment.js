
// window.onload = function getDataComment() {
//     y = "60a007883870360978b44e2c";
//     z= Math.floor(Math.random()*5);
//     fetch
//     (`/comment/${y}/${z}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json; text/html',
//         }
//     })
//         .then(response => {
//             console.log(response.body);
//             response.text().then((data) => {
//                 console.log(data)
//                 let list = document.createElement('div');
//                 list.innerHTML = data;
//                 document.getElementsByClassName('comment')[0].appendChild(list)
//             })
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
