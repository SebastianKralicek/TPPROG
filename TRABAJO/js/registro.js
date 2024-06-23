
document.querySelector('.formregistro').addEventListener('submit', function(event) {
    event.preventDefault();

    
    let email = document.querySelector('#emailregistro')
    let password = document.querySelector('#contraseñaregistro')
    let repeatPassword = document.querySelector('#repetircontraseñaregistro')
    let terms = document.querySelector('#terminosycondiciones')
    let errorMessage = document.querySelector('.errormensaje')


    if (!email) {
        errorMessage = document.querySelector("p").innerHTML = "Por favor complete el campo email";
        return;
    }
    
    if (!password) {
        errorMessage = document.querySelector("p").innerHTML = "Por favor complete el campo contraseña";
        return;
    
    }
    if (password.length < 6) {
        errorMessage = 'Debe ingresar al menos 6 caracteres';
        return;
    }

    if (password !== repeatPassword) {
        errorMessage = 'Las contraseñas no coinciden';
        return;
    }

    if (!terms) {
        errorMessage = 'Por favor acepte los términos y condiciones';
        return;
    }

    window.location.href = './login.html';
});




