let secondFlow = document.querySelector(".second-flow");
let groupSearchingInput = document.querySelector(".search-tool__input");
let postCreatorArea = document.querySelector(".post-creator__content");
let modalRemovingIcon = document.querySelector(".modal-box__remove-icon");
let textArea = document.querySelector(".form__text-input");
let formSubmitBtn = document.querySelector(".form__submit-button");

function openPostCreatorModal() {
    secondFlow.style.display = "flex";   
}

function handleModalRemoval() {
    secondFlow.style.display = "none";
}

function makeSubmitBtnAllowed() {
    formSubmitBtn.classList.remove("form__submit-button--not-allowed");
    formSubmitBtn.classList.add("form__submit-button--allowed");
    formSubmitBtn.setAttribute("type", "submit");
}

function makeSubmitBtnNotAllowed() {
    formSubmitBtn.classList.remove("form__submit-button--allowed");
    formSubmitBtn.classList.add("form__submit-button--not-allowed");
    formSubmitBtn.setAttribute("type", "button");
}

function handleTextAreaValue() {
    if (textArea.value !== "") {
        makeSubmitBtnAllowed();
    }
    else {
        makeSubmitBtnNotAllowed();
    }
}