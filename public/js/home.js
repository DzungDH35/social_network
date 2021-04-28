document.addEventListener('DOMContentLoaded', (event) => {
    let search_friend = document.getElementById("search_friend");
    
    // sau co data xu ly tiep
    search_friend.addEventListener('focus', (event) => {
        let icon_search = document.getElementById("icon_search_top");
        let image_brand = document.getElementById("brand_img");
        let arrow_search = document.getElementsByClassName("arrow")[0];
        icon_search.style.transform = "translateX(-40px)";
        setTimeout(
            function(){ 
                icon_search.style.display = "none";
            }, 300);
    });
    
});