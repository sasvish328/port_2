// const el = document.querySelector(".begin-form-box");
// let computedStyle = window.getComputedStyle(el);
// let fontSize = computedStyle.getPropertyValue("font-size");
// let width = computedStyle.getPropertyValue("width");
// console.log("Ширина блока:", width);

// =========== для формы, но пока не нужное ------
// const body = document.querySelector("body");
// computedStyle = window.getComputedStyle(body);
// width = computedStyle.getPropertyValue("width");
// console.log("body width = ", width);

// обработка ошибок в форме
const submit = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
form.setAttribute("novalidate", "")


function isFormValid(form) {
  // проверяет ФОРМУ, предназначена для submit
  
  let result = true;
  const inputs = form.querySelectorAll('input, textarea');

  for (const input of inputs) {
    clearError(input)
    let [validity, errorMessage] = oneFieldValidation(input)
    if (!validity) {
      createError(input, errorMessage) 
      result = false
    }
  }

  return result
}


const inputs = form.querySelectorAll('input, textarea');
inputs.forEach((input => {
  input.addEventListener('blur', (e) => {
    oneFieldErrorWorking(e.target)
  })
}));


function valForBlur(e) {
  // const upperTagName = e.target.tagName.toUpperCase()
  let input = e.target
  
  // let [validity, errorMessage] = oneFieldValidation(input)

  // if (validity) {
  //   console.log('В "' + input.dataset.name + '" всё хорошо');
  // } else {
  //   console.log('В "' + input.dataset.name + '" ошибка: ' + errorMessage);
  // }

  return oneFieldValidation(input)
  // return [validity, errorMessage]
} 

function oneFieldErrorWorking(input) {
  clearError(input)
  let [validity, errorMessage] = oneFieldValidation(input)
  if (!validity) {
    createError(input, errorMessage) 
    result = false
  }
  
}

function oneFieldValidation(input) {
  let validity = true
  let errorMessage = ""

  if ((null != input.getAttribute("required")) 
    && input.validity.valueMissing) {
    validity = false
    errorMessage = input.dataset.name + ' пуст, а дб заполнен' 
  }

  const minlength = input.getAttribute("minlength")
  if ((null != minlength) 
    && input.validity.tooShort) {
    validity = false
    errorMessage = 'В ' + input.dataset.name + ' слишком мало букв, дб больше чем ' + minlength
  }

  const pattern = input.getAttribute("pattern")
  if ((null != pattern) 
    && input.validity.patternMismatch) {
    validity = false
    errorMessage = input.dataset.name + ' набран неправильно'
  }

  const maxlength = input.getAttribute("maxlength")
  if ((null != maxlength) 
    && input.validity.tooLong) {
    validity = false
    errorMessage = 'В "' + input.dataset.name +  '" слишком много букв, дб не больше ' + maxlength
    // такое вводом не набрать, в т.ч. вставкой 
    // скорее всего никогда не выполнится это условие
  }

  return [validity, errorMessage] 
}


function createError(input, text) { 
  const fnErrorLabel = document.querySelector("."+input.id+" > .error-label")

  fnErrorLabel.classList.add('active-error-label') 
  fnErrorLabel.textContent = text
  const parent = fnErrorLabel.parentNode
  if (!parent.classList.contains('error-item')) {
    parent.classList.add('error-item')
  }
}

function clearError(input) { 
  const parent = input.parentNode
  if (parent.classList.contains("error-item")) {
    parent.classList.remove("error-item")

    const fnErrorLabel = document.querySelector("."+input.id+" > .error-label")
    fnErrorLabel.textContent = ""
    fnErrorLabel.classList.remove('active-error-label') 
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (isFormValid(e.target) == true) {
    console.log("форма прошла валидацию успешно");
    // отправляем запрос на сервер

    // Создаем объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Открываем соединение
    xhr.open('POST', 'http://localhost:3000', true);
    // при этом на 3000м порту должен быть стартован сервер

    // Устанавливаем заголовок
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Создаем объект FormData и добавляем данные формы
    const formData = new FormData(e.target);

    console.log("данные в formData после создания (new)", formData);

    const encodedData = new URLSearchParams(formData).toString();
    // Отправляем данные на сервер
    xhr.send(encodedData);

    // Обработка события завершения запроса
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Успешный ответ от сервера
          console.log("Данные успешно отправлены на сервер");
        } else {
          // Ошибка при отправке данных
          console.error("Ошибка при отправке данных на сервер");
          console.log("код ошибки == ", xhr.status);
        }
      }
    };
  } else {
    console.log("форма не прошла валидацию!!!!!");
  }
});

