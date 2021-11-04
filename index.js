const registration = document.querySelector(".registration");
const button = registration.querySelector(".button");
const firstName = registration.querySelector(".firstName");
const lastName = registration.querySelector(".lastName");
const email = registration.querySelector(".email");
const password = registration.querySelector(".password");
const passwordRepeat = registration.querySelector(".passwordRepeat");
const birthDate = registration.querySelector(".birthDate");
const fields = registration.querySelectorAll(".field");

const nameRegExp = /^(?=.{1,255}$)([A-Za-zА-Яа-яЁё]+)$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegExp = /(?=.*[0-9])(?=.*[^\w\s])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

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

  if (!nameRegExp.test(firstName.value) && firstName.value != "") {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Имя содержит недопустимые символы";
    firstName.parentElement.insertBefore(error, firstName.nextElementSibling);
  }
  if (!nameRegExp.test(lastName.value) && lastName.value != "") {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Фамилия содержит недопустимые символы";
    lastName.parentElement.insertBefore(error, lastName.nextElementSibling);
  }

  if (!emailRegExp.test(email.value) && email.value != "") {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Неверно указан email-адрес";
    email.parentElement.insertBefore(error, email.nextElementSibling);
  }

  if (!passwordRegExp.test(password.value) && password.value != "") {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, одну заглавную, одну строчную буквы, и один символ";
    password.parentElement.insertBefore(error, password.nextElementSibling);
  }
  if (password.value != passwordRepeat.value && passwordRepeat != "") {
    let error = document.createElement("div");
    error.classList = "error";
    error.style.color = "red";
    error.innerHTML = "Пароли не совпадают";
    passwordRepeat.parentElement.insertBefore(error, passwordRepeat.nextElementSibling);
  }
  if (birthDate.value != "") {
    const birthDateArray = birthDate.value.split("-");
    const birthDay = birthDateArray[2];
    const birthMonth = birthDateArray[1] - 1;
    const birthYear = birthDateArray[0];
    const limitationsAge = 18;

    let userBirthDate = new Date();
    userBirthDate.setFullYear(birthYear, birthMonth, birthDay);
    const nowDate = new Date();
    let limitationsAgeDate = new Date();
    limitationsAgeDate.setFullYear(userBirthDate.getFullYear() + limitationsAge, birthMonth, birthDay);

    if ((nowDate - limitationsAgeDate) < 0) {
      let error = document.createElement("div");
      error.classList = "error";
      error.style.color = "red";
      error.innerHTML = "Вам нет 18 лет"
      birthDate.parentElement.insertBefore(error, birthDate.nextElementSibling);
    }
  }
});
