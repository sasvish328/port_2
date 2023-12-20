let form = document.querySelector('.formWithValidation')
let validateBtn = form.querySelector('.validateBtn')
let from = form.querySelector('.from')
let password = form.querySelector('.password')
let passwordConfirmation = form.querySelector('.passwordConfirmation')
let where = form.querySelector('.where')
let message = form.querySelector('.message')
let fields = form.querySelectorAll('.field')

let generateError = function (text) {
  let error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

let removeValidation = function () {
  let errors = form.querySelectorAll('.error')

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

let checkFieldsPresence = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      let error = generateError('Cant be blank')
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
}

let checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals')
    let error = generateError('Password doesnt match')
    password.parentElement.insertBefore(error, password)
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation();
  checkFieldsPresence();
  checkPasswordMatch();

})
