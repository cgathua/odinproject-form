"use strict"

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm');
let displayOutput = document.getElementById('message');
let submitBtn = document.getElementById('submit');

confirmPassword.addEventListener("keyup", validatePassword);

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        displayOutput.style.color = 'red';
        displayOutput.textContent = '*passwords do not match'
        submitBtn.disabled = true;
        submitBtn.style.opacity = (0.4);
    } else {
        displayOutput.style.color = 'green';
        displayOutput.textContent = '*password matches';
        submitBtn.disabled = false;
        submitBtn.style.opacity = (1);
    }
}


