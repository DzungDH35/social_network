function areAllInputsValid(inputList) {
    for (let input of inputList) {
        if (input.value === "") return false;
    }
    return true;
}

let previewBox = document.querySelector('.preview-box');
let inputList = document.querySelectorAll('.sidebar__input');
let groupImgPreview = document.querySelector('.preview-box__group-img');
let groupNamePrewview = document.querySelector('.preview-box__group-name');
let submitBtn = document.querySelector('.submit-btn');
let imgDir = "/images/img/";

inputList[0].addEventListener('input', () => {

    /* ========== event 1 ========== */
    if (areAllInputsValid(inputList)) {
        submitBtn.classList.remove('not-allowed-btn');
        submitBtn.classList.add('allowed-btn');
    }
    else {
        submitBtn.classList.remove('allowed-btn');
        submitBtn.classList.add('not-allowed-btn');
    }
    /* ================================================== */

    /* ========== event 2 ========== */
    groupNamePrewview.innerHTML = inputList[0].value;
    /* ================================================== */
});


inputList[1].addEventListener('change', () => {

    /* ========== event 1 ========== */
    if (areAllInputsValid(inputList)) {
        submitBtn.classList.remove('not-allowed-btn');
        submitBtn.classList.add('allowed-btn');
    }
    else {
        submitBtn.classList.remove('allowed-btn');
        submitBtn.classList.add('not-allowed-btn');
    }
    /* ================================================== */

    /* ========== event 2 ========== */
    groupImgPreview.src = imgDir + inputList[1].value.replace("C:\\fakepath\\", "");
    previewBox.classList.remove('preview-box--filtered');
    /* ================================================== */
});