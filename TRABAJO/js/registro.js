let form = document.querySelector('.formregistro');

let email = document.querySelector('#emailregistro');
let password = document.querySelector('#contraseñaregistro');
let repeatPassword = document.querySelector('#repetircontraseñaregistro');
let terms = document.querySelector('#terminosycondiciones');

let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');
let repeatPasswordError = document.querySelector('#repeatPasswordError');
let termsError = document.querySelector('#termsError');


email.addEventListener('input', function() {
    if (email.value === '') {
        emailError.innerText = 'Por favor complete el campo email';
    } else {
        emailError.innerText = '';
    }
});

password.addEventListener('input', function() {
    if (password.value === '') {
        passwordError.innerText = 'Por favor complete el campo contraseña';
    } else if (password.value.length < 6) {
        passwordError.innerText = 'Debe ingresar al menos 6 caracteres';
    } else {
        passwordError.innerText = '';
    }
});

repeatPassword.addEventListener('input', function() {
    if (repeatPassword.value !== password.value) {
        repeatPasswordError.innerText = 'Las contraseñas no coinciden';
    } else {
        repeatPasswordError.innerText = '';
    }
});

terms.addEventListener('blur', function() {
    if (!terms.checked) {
        termsError.innerText = 'Por favor acepte los términos y condiciones';
    } else {
        termsError.innerText = '';
    }
});

form.addEventListener('submit', function(event) {
    if (email.value === '') {
        emailError.innerText = 'Por favor complete el campo email';
        email.focus();
        event.preventDefault();
        return;
    }

    if (password.value === '') {
        passwordError.innerText = 'Por favor complete el campo contraseña';
        password.focus();
        event.preventDefault();
        return;
    } else if (password.value.length < 6) {
        passwordError.innerText = 'Debe ingresar al menos 6 caracteres';
        password.focus();
        event.preventDefault();
        return;
    }

    if (repeatPassword.value !== password.value) {
        repeatPasswordError.innerText = 'Las contraseñas no coinciden';
        repeatPassword.focus();
        event.preventDefault();
        return;
    }

    if (!terms.checked) {
        termsError.innerText = 'Por favor acepte los términos y condiciones';
        terms.focus();
        event.preventDefault();
        return;
    }

    window.location.href = './login.html';
})
