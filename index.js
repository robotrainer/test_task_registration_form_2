const registration = document.querySelector(".registration");
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

function addError(errorText, node) {
  let error = document.createElement("div");
  error.classList = "error";
  error.innerHTML = errorText;
  if (node) {
    node.parentElement.insertBefore(error, node.nextElementSibling);
  }
  return error;
}

registration.addEventListener("submit", (event) => {
  event.preventDefault();

  let errors = registration.querySelectorAll(".error");

  for (let err of errors) {
    err.remove();
  }

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      const errorText = "Поле не заполненно";
      const error = addError(errorText);
      registration[i].parentElement.insertBefore(error, fields[i].nextElementSibling);
    }
  }

  if (!nameRegExp.test(firstName.value) && firstName.value != "") {
    const errorText = "Имя содержит недопустимые символы";
    addError(errorText, firstName);
  }
  if (!nameRegExp.test(lastName.value) && lastName.value != "") {
    const errorText = "Фамилия содержит недопустимые символы";
    addError(errorText, lastName);
  }

  if (!emailRegExp.test(email.value) && email.value != "") {
    const errorText = "Неверно указан email-адрес";
    addError(errorText, email);
  }

  if (!passwordRegExp.test(password.value) && password.value != "") {
    const errorText = "Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, одну заглавную, одну строчную буквы, и один символ";
    addError(errorText, password);
  }
  if (password.value != passwordRepeat.value && passwordRepeat.value != "") {
    const errorText = "Пароли не совпадают";
    addError(errorText, passwordRepeat);
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
      const errorText = "Вам нет 18 лет";
      addError(errorText, birthDate);
    }
  }
});
