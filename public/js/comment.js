


function showDivCmt(post){
    var currentNumCmt = 0;
    var z = 1;

    var postId = post.getAttribute("data-swrap-cmt-id");
    console.log(postId);
    document.querySelector("[data-post-id=" + CSS.escape(postId) + "]").style.display = "block";
    fetch
    (`/comment/${postId}/${z}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; text/html',
        }
    })
        .then(response => {
            response.json().then(res => {
                let oldCmt = document.createElement('div');
                oldCmt.innerHTML = res.html;
                document.querySelector("[data-old-cmt-id=" + CSS.escape(postId) + "]").appendChild(oldCmt);
                currentNumCmt+=res.numberOfCmtInPage;
                console.log(currentNumCmt);
                if(currentNumCmt != res.numberOfRecord ) {
                    showDivMoreCmt(postId);
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function showDivMoreCmt(postId){
    document.querySelector("[data-more-id=" + CSS.escape(postId) + "]").style.display = "block";
    var numNow = 3;
    var pageNow = 2;
    document.querySelector("[data-more-id=" + CSS.escape(postId) + "]").addEventListener('click', fetchagain(numNow, pageNow, postId) );
}

var fetchagain = function(currentNumCmt, z, postId ){
    fetch
    (`/comment/${postId}/${z}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; text/html',
        }
    })
        .then(response => {
            response.json().then(res => {
                let oldCmt = document.createElement('div');
                oldCmt.innerHTML = res.html;
                document.querySelector("[data-old-cmt-id=" + CSS.escape(postId) + "]").appendChild(oldCmt);
                currentNumCmt+=res.numberOfCmtInPage;
                console.log(currentNumCmt);
                if(currentNumCmt != res.numberOfRecord ) {
                    z++;
                    document.querySelector("[data-more-id=" + CSS.escape(postId) + "]").addEventListener('click', () => {
                        fetchagain(currentNumCmt, z, postId);
                    });
                }else{
                    document.querySelector("[data-more-id=" + CSS.escape(postId) + "]").style.display = "none";
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
