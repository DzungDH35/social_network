function dropdownSetting(post){
    var postId = post.getAttribute("data-id");
    if(document.querySelector("[data-show-dropdown=" + CSS.escape(postId) + "]").style.display === "none") {
        document.querySelector("[data-show-dropdown=" + CSS.escape(postId) + "]").style.display = "block";
    }else{
        document.querySelector("[data-show-dropdown=" + CSS.escape(postId) + "]").style.display = "none";
    }
}