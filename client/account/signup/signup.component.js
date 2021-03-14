window.onload = () => {
    let i;
    let temp;

    temp = document.getElementById("date");
    for(i = 1; i <= 31; ++i) temp.innerHTML = temp.innerHTML + '<option value="'+ i + '">' + i.toString() + '</option>';
    temp = document.getElementById("year");
    for(i = 1900; i <= new Date().getFullYear(); ++i) temp.innerHTML = temp.innerHTML + '<option value="'+ i + '">' + i.toString() + '</option>';
};

let inputArea = document.querySelectorAll(".input-with-eye > input")
let eyeIcon = document.querySelectorAll(".input-with-eye > i");

for(let i = 0; i < eyeIcon.length; ++i) {
    eyeIcon[i].addEventListener("click", () => {
        if(inputArea[i].getAttribute("type") === "password") {
            inputArea[i].setAttribute("type", "text");
            eyeIcon[i].setAttribute("class", "fas fa-eye")
        }
        else {
            inputArea[i].setAttribute("type", "password");
            eyeIcon[i].setAttribute("class", "fas fa-eye-slash")
        }
    });
}