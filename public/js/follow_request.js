function followUser(userId, event) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) window.location.reload();
    };
    xhttp.open("POST", "/follow/" + userId, true);
    xhttp.send();
}

function unfollowUser(userId, event) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) window.location.reload();
    };
    xhttp.open("DELETE", "/follow/" + userId, true);
    xhttp.send();
}