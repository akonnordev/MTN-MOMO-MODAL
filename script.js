"use strict";
let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-activate");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
});
function reveal() {
  let elements = [];
  Array.prototype.push.apply(elements, document.getElementsByTagName("input"));
  //Array.prototype.push.apply(elements, document.getElementsByTagName("p"));

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type === "password") {
      elements[i].type = "text";
    } else {
      elements[i].className = "";
    }
  }
}
window.reveal = reveal;

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
