var iputName = document. getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.submit-button');

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test (inputMail.value) && inoutMessage.value.trim() !==""){
        button.style.backgroundColor = '#fa923f'; 
        button.disabled = false; 
    } else {
        button.style.backgroundColor= '#979695'
        button.disabled =true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submitted');
})