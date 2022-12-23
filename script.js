"use strict";
let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  modalBg.classList.add("modal-activate");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
});
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "number" ? "password" : "number";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
