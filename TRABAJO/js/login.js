let FormularioLogin = document.querySelector("#LoginForm")
let LoginEmail = document.querySelector("#LoginEmail")
let LoginContrasena = document.querySelector("#LoginContrasena")

FormularioLogin.addEventListener('submit', function(e){
    e.preventDefault()
    if(LoginEmail.value == ""){
        alert("Por favor complete el campo email")
    }
    else if(LoginContrasena.value == ""){
        alert("Por favor complete el campo contraseña")
    }
    else if(LoginContrasena.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    return false;
}
    else{
        alert("Felicidades")
        FormularioLogin.submit()
        localStorage.setItem("MailsUsuarios", LoginEmail.value);

    }
})
