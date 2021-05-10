let postList = null;

function getData(){
  fetch
      ('/post/home/1', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
          .then(response => {
              response.status
              response.json().then((data) => {
                postList = data;
                console.log(postList)
                // console.log(data);
              })
          })
          .catch(error => {
              console.error('Error:', error);
          });
}
getData();