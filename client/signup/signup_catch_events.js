/* =============== Module catch eye-icon event =============== */

let eyeIcon = document.querySelectorAll(".input-with-eye > i");
let inputArea = document.querySelectorAll(".input-with-eye > input");
for (let i = 0; i < eyeIcon.length; ++i) eyeIcon[i].addEventListener("click", () => eyeEventHandler(eyeIcon[i], inputArea[i]));

/* ========================================================================================== */

/* =============== Module catch inputs' events =============== */

let firstName = document.querySelector('[name="firstname"]');
let lastName = document.querySelector('[name="lastname"');
let emailAddr = document.querySelector('[name="email"]');
let password = document.querySelector('[name="password"]');
let cfPassword = document.querySelector('[name="cf-password"]');
let alertAreas = document.querySelectorAll('[class="alert-area"]');

firstName.onblur = () => alertAreaHandler(!isNameValid(firstName.value), alertAreas[0]);
lastName.onblur = () => alertAreaHandler(!isNameValid(lastName.value), alertAreas[1]);
emailAddr.onblur = () => alertAreaHandler(!isEmailValid(emailAddr.value), alertAreas[2]);
password.onblur = () => alertAreaHandler(!isPasswordValid(password.value), alertAreas[3]);
cfPassword.onblur = () => alertAreaHandler(!isPasswordConfirmed(password.value, cfPassword.value), alertAreas[4]);

/* ========================================================================================== */

/* =============== Module catch submit event =============== */

/* map view to model according to backend data's format: {userName, name, email, pwd}
    lastName.value -> userName
    lastName.value -> name
    emailAddr.value -> email
    password.value -> pwd
*/

document.querySelector('button[type="submit"]').onclick = () => submitHandler();

/* ========================================================================================== */