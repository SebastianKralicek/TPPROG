document.querySelector('.formregistro').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.querySelector('#emailregistro').value.trim();
    let password = document.querySelector('#contraseñaregistro').value.trim();
    let repeatPassword = document.querySelector('#repetircontraseñaregistro').value.trim();
    let terms = document.querySelector('#terminosycondiciones').checked;

    let errorMessage = document.querySelector('.error-message2');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message2');
        document.querySelector('.formregistro').appendChild(errorMessage);
    }
    errorMessage.textContent = '';

    if (!email) {
        errorMessage.textContent = 'Por favor complete el campo email';
        return;
    }
    
    if (!password) {
        errorMessage.textContent = 'Por favor complete el campo contraseña';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Debe ingresar al menos 6 caracteres';
        return;
    }

    if (password !== repeatPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden';
        return;
    }

    if (!terms) {
        errorMessage.textContent = 'Por favor acepte los términos y condiciones';
        return;
    }

    window.location.href = './login.html';
});