let formulariologin = document.querySelector("#LoginForm")
let loginemail = document.querySelector("#LoginEmail")
let logincontrasena = document.querySelector("#LoginContrasena")

formulariologin.addEventListener('submit', function(e){
    e.preventDefault()
    if(loginemail.value == ""){
        alert("Por favor complete el campo email")
    }
    else if(logincontrasena.value == ""){
        alert("Por favor complete el campo contraseña")
    }
    else if(logincontrasena.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    return false;
}
    else{
        alert("Felicidades")
        formulariologin.submit()
        localStorage.setItem("MailsUsuarios", loginemail.value);

    }
})
