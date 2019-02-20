let inputfirstName = document.querySelector('input[data-validation="firstName"]');
let inputlastName = document.querySelector('input[data-validation="lastName"]');
let inputRadio = document.querySelectorAll('input[type="radio"]');
let inputEmail = document.querySelector('input[data-validation="email"]');
let inputPassword = document.querySelector('input[data-validation="password"]');
let inputAddress = document.querySelector('input[data-validation="address"]');
let inputDatepicker = document.querySelector('input[data-validation="datepicker"]');
let inputSelect = document.querySelector('select');
let inputGender = document.querySelector('fieldset[data-validation="gander"]');

let button = document.querySelector('input[type="button"]');
button.addEventListener('click', validForm);

function validForm() {
    firstName();
    lastName();
    inputRadioRequire();
    email();
    password();
    address();
    chooseSelect();
    datePicker();

    if (firstName() && lastName() && inputRadioRequire() && email() && password() && address() && chooseSelect() && datePicker()) {
        alert('Validation passed.')
    }

}
;
function firstName() {

    let validFirstName = /[\'\"]/.test(inputfirstName.value);
    let spanNotValidFirstName = document.querySelector('span.notValidFirstName');
    let spanEmptyFieldFirstName = document.querySelector('span.emptyFieldFirstName');

    if (!validFirstName) {
        inputfirstName.classList.remove("dangerInput");
        spanNotValidFirstName.classList.remove("showSpan");
        spanEmptyFieldFirstName.classList.remove("showSpan");

    }
    if (validFirstName) {
        inputfirstName.classList.add("dangerInput");
        spanNotValidFirstName.classList.add("showSpan");
        spanEmptyFieldFirstName.classList.remove("showSpan");
        return false;
    }
    if (inputfirstName.value == "") {
        spanEmptyFieldFirstName.classList.add("showSpan");
        inputfirstName.classList.add("dangerInput");
        return false;
    }

    return true;

}
;
function lastName() {

    let validlastName = /[\'\"]/.test(inputlastName.value);
    let spanNotValidlastName = document.querySelector('span.notValidlastName');
    let spanEmptyFieldLastName = document.querySelector('span.emptyFieldLastName');

    if (!validlastName) {
        inputlastName.classList.remove("dangerInput");
        spanNotValidlastName.classList.remove("showSpan");
        spanEmptyFieldLastName.classList.remove("showSpan");

    }
    if (validlastName) {
        inputlastName.classList.add("dangerInput");
        spanNotValidlastName.classList.add("showSpan");
        spanEmptyFieldLastName.classList.remove("showSpan");
        return false;
    }
    if (inputlastName.value == "") {
        spanEmptyFieldLastName.classList.add("showSpan");
        inputlastName.classList.add("dangerInput");
        return false;
    }
    return true;

}
;
function datePicker() {
    let spanemptyFieldBirthday = document.querySelector('span.emptyFieldBirthday');
    spanemptyFieldBirthday.classList.remove("showSpan");
    inputDatepicker.classList.remove("dangerInput");
    if (form.datepicker.value == "") {
        spanemptyFieldBirthday.classList.add("showSpan");
        inputDatepicker.classList.add("dangerInput");
        return false;
    }
    return true;
}

function inputRadioRequire() {
    let inputEmptyFieldGender = document.querySelector('span.emptyFieldGender')
    inputEmptyFieldGender.classList.add("showSpan");
    inputGender.classList.add("dangerFieldset");
    if (inputRadio[0].checked || inputRadio[1].checked || inputRadio[2].checked) {
        inputEmptyFieldGender.classList.remove("showSpan");
        inputGender.classList.remove("dangerFieldset");
        return true;
    }
    return false;
}
;
function chooseSelect() {
    let spanNotValidCountry = document.querySelector('span.notValidCountry');
    spanNotValidCountry.classList.remove("showSpan");
    inputSelect.classList.remove("dangerInput");
    if (form.select.selectedIndex == 0) {
        spanNotValidCountry.classList.add("showSpan");
        inputSelect.classList.add("dangerInput");
        return false;
    }
    return true;
}
;
function email() {

    let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(inputEmail.value);
    let spanNotValidEmail = document.querySelector('span.notValidEmail');
    let spanEmptyFieldEmail = document.querySelector('span.emptyFieldEmail');

    if (validEmail) {
        inputEmail.classList.remove("dangerInput");
        spanNotValidEmail.classList.remove("showSpan");
        spanEmptyFieldEmail.classList.remove("showSpan");
        return true;
    }
    if (inputEmail.value == "") {
        spanEmptyFieldEmail.classList.add("showSpan");
        inputEmail.classList.add("dangerInput");
        spanNotValidEmail.classList.remove("showSpan");
    }
    if (inputEmail.value) {
        inputEmail.classList.add("dangerInput");
        spanNotValidEmail.classList.add("showSpan");
        spanEmptyFieldEmail.classList.remove("showSpan");
    }
    return false;
}
;
function password() {

    let validPassword = /[A-Z0-9]{6,}/i.test(inputPassword.value);
    let spanNotValidPassword = document.querySelector('span.notValidPassword');
    let spanEmptyFieldPassword = document.querySelector('span.emptyFieldPassword');

    if (validPassword) {
        inputPassword.classList.remove("dangerInput");
        spanNotValidPassword.classList.remove("showSpan");
        spanEmptyFieldPassword.classList.remove("showSpan");
        return true;
    }
    if (inputPassword.value == "") {
        spanEmptyFieldPassword.classList.add("showSpan");
        inputPassword.classList.add("dangerInput");
    }
    if (inputPassword.value) {
        inputPassword.classList.add("dangerInput");
        spanNotValidPassword.classList.add("showSpan");
        spanEmptyFieldPassword.classList.remove("showSpan");
    }
    return false;

}
;
function address() {
    let spanEmptyFieldAddress = document.querySelector('span.emptyFieldAddress');
    if (inputAddress.value) {
        inputAddress.classList.remove("dangerInput");
        spanEmptyFieldAddress.classList.remove("showSpan");
        return true;
    }
    if (!inputAddress.value) {
        spanEmptyFieldAddress.classList.add("showSpan");
        inputAddress.classList.add("dangerInput");
    }
    return false;

}
;