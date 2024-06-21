let Login = document.querySelector("#Loginn")
let MsjBienvenida = document.querySelector("#MensajeMail")

let LinkLogout = document.querySelector(".LogO")

LinkLogout.addEventListener("click", function(e){
    e.preventDefault
    localStorage.removeItem("MailsUsuarios")

LinkLogout.style.display = "none";
MsjBienvenida.style.display = "none";
Login.style.display = "block";
Registro.style.display = "block";

})


