function joinGroup(groupId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) window.location.reload();
    };
    xhttp.open("POST", "/group/" + groupId, true);
    xhttp.send();
}

function leaveGroup(groupId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) window.location.reload();
    };
    xhttp.open("DELETE", "/group/" + groupId, true);
    xhttp.send();
}