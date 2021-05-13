//Choose preview image comment
var i = 0;
function preview_image_cmt(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementsByName('output_image_cmt')[i];
        output.src = reader.result;
        i++;
    }
    reader.readAsDataURL(event.target.files[0]);
}   

//ThreeDots Click - Xóa 
function deleteStatus(){
    document.getElementById("myDropdown").classList.toggle("show");
}
    