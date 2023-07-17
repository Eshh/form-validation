const form = document.getElementById("form");
const pwd1El = document.getElementById("password1");
const pwd2El = document.getElementById("password2");
const msgContainer = document.querySelector(".message-container");
const msg = document.getElementById("message");

let isValid = false;
let isPasswordMatch = false;

function onSubmit(e) {
  e.preventDefault();
  validateForm();
}
function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    msg.textContent = "Please fill out all fields";
    msg.style.color = "#8b1c1c";
    msgContainer.style.borderColor = "#8b1c1c";
    return;
  }
  if (pwd1El.value !== pwd2El.value) {
    isPasswordMatch = false;
    msg.textContent = "Passwords dont match";
    msg.style.color = "#8b1c1c";
    msgContainer.style.borderColor = "#8b1c1c";
    return;
  } else {
    isPasswordMatch = true;
  }
  if (isValid && isPasswordMatch) {
    msg.textContent = "Hurray";
    msg.style.color = "green";
    msgContainer.style.borderColor = "green";
  }
}
form.addEventListener("submit", onSubmit);
