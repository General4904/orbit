// Scripts
console.log(`Hello World`);

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
const button = document.querySelector("#button");
const form = document.querySelector("form");
const firstnameError = document.querySelector(".firstname-error");
const lastnameError = document.querySelector(".lastname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const passwordLengthError = document.querySelector(".password-length-error");
const telError = document.querySelector(".tel-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const equalToPasswordError = document.querySelector(".equal-to-password-error");

console.log(equalToPasswordError);

let valid;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (firstnameValue === "") {
    firstname.style.border = `1px solid red`;
    firstname.style.backgroundColor = `#FEEEE2`;
    firstnameError.style.display = `block`;
  } else if (lastnameValue === "") {
    lastname.style.border = `1px solid red`;
    lastname.style.backgroundColor = `#FEEEE2`;
    lastnameError.style.display = `block`;
  } else if (emailValue === "") {
    email.style.border = `1px solid red`;
    email.style.backgroundColor = `#FEEEE2`;
    emailError.style.display = `block`;
  } else if (telValue === "") {
    tel.style.border = `1px solid red`;
    tel.style.backgroundColor = `#FEEEE2`;
    telError.style.display = `block`;
  } else if (passwordValue === "") {
    password.style.border = `1px solid red`;
    password.style.backgroundColor = `#FEEEE2`;
    passwordError.style.display = `block`;
  } else if (passwordValue.length < 8) {
    password.style.border = `1px solid red`;
    passwordLengthError.style.display = `block`;
    password.style.backgroundColor = `#FEEEE2`;
    passwordLengthError.style.color = `black`;
    password.value = "";
  } else if (confirmPasswordValue === "") {
    confirmPassword.style.border = `1px solid red`;
    confirmPassword.style.backgroundColor = `#FEEEE2`;
    confirmPasswordError.style.display = `block`;
  } else if (confirmPasswordValue !== passwordValue) {
    confirmPassword.style.border = `1px solid red`;
    confirmPassword.style.backgroundColor = `#FEEEE2`;
    equalToPasswordError.style.display = `block`;
    password.value = "";
    confirmPassword.value = "";
  }
});
