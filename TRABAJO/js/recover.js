document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.querySelector('input[name="emailrecover"]').value.trim();
    const checkbox = document.querySelector('input[name="recoverPassword"]').checked;
    const form = event.target;
    
    let messagesContainer = document.querySelector('.messages');
    messagesContainer.innerHTML = ''; // Limpiar mensajes anteriores
    
    let errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    
    let successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    
    let loginLink = document.querySelector('.login-link');
    loginLink.style.display = 'none';
    
    if (!email) {
        errorMessage.textContent = 'Por favor escriba su email.';
        messagesContainer.appendChild(errorMessage);
        return;
    }
    
    if (!checkbox) {
        errorMessage.textContent = 'Por favor acepte el campo "Quiero recuperar mi contraseña" ';
        messagesContainer.appendChild(errorMessage);
        return;
    }

    successMessage.textContent = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
    messagesContainer.appendChild(successMessage);
    loginLink.style.display = 'block';
});