const registration = document.querySelector(".registration");
const button = registration.querySelector(".button");
const firstName = registration.querySelector(".firstName");
const lastName = registration.querySelector(".lastName");
const email = registration.querySelector(".email");
const password = registration.querySelector(".password");
const passwordRepeat = registration.querySelector(".passwordRepeat");
const birthDate = registration.querySelector(".birthDate");
const fields = registration.querySelectorAll(".field");

registration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = registration.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = document.createElement("div");
      error.classList = "error";
      error.style.color = "red";
      error.innerHTML = "Пустое поле";
      registration[i].parentElement.insertBefore(error, fields[i].nextElementSibling);
    }
  }

  if (password.value != passwordRepeat.value) {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Пароли не совпадают";
    passwordRepeat.parentElement.insertBefore(error, passwordRepeat.nextElementSibling);
  }
});