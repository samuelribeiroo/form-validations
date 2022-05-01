const log = console.log

const getForm = document.querySelector('form')

const userName = document.getElementById('username')

const getEmail = document.getElementById('email')

const getPassword = document.getElementById('password2')

const passwordAgain = document.getElementById('password2')

getForm.addEventListener('submit', event => {
    event.preventDefault()

    validateInputs() // fn with all logic validation
})

// helpers functions

function setError(input, message) {
    const inputControl = input.parentElement

    const displayError = inputControl.querySelector('.error')

    displayError.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement

    const displayError = inputControl.querySelector('.error')

    displayError.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
    
}

function isValidEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regEx.test(String(email).toLocaleLowerCase())
}