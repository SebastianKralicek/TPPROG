let form = document.querySelector('.formrecover');
let loginLinkRecover = document.querySelector('.login-link-recover');

let email1 = document.querySelector('#emailrecover');
let checkboxrecover = document.querySelector('#passwordrecover');

let email1error = document.querySelector('#emailerrorrecover');
let checkboxrecovererror = document.querySelector('#passworderrorrecover');

let successMessage = document.querySelector('#successMessage');

email1.addEventListener('input', function() {
    if (email1.value === '') {
        email1error.innerText = 'Por favor complete el campo email';
    } else {
        email1error.innerText = '';
    }
});

checkboxrecover.addEventListener('change', function() {
    if (!checkboxrecover.checked) {
        checkboxrecovererror.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña';
    } else {
        checkboxrecovererror.innerText = '';
    }
});

form.addEventListener('submit', function(event) {
    if (email1.value === '') {
        email1error.innerText = 'Por favor complete el campo email';
        event.preventDefault();
        return;
    } else {
        email1error.innerText = '';
    }

    if (!checkboxrecover.checked) {
        checkboxrecovererror.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña';
        event.preventDefault();
        return;
    } else {
        checkboxrecovererror.innerText = '';
    }

    successMessage.style.display = 'block';
    loginLinkRecover.style.display = 'block';
    event.preventDefault(); // Lo que hace este prevent, es que evita el envio en tiempo real del formulario para mostrar los mensajes
});

