let MailUser = localStorage.getItem("MailsUsuarios")
let header = document.querySelector("header")
let Loginn = document.querySelector("#Loginn")
let Registro = document.querySelector("#Register")

if (MailUser == ""){
     Loginn.style.display = "block"
     Registro.style.display = "block"
}
else if (MailUser == null){
    Loginn.style.display = "block"
     Registro.style.display = "block"
}
else {
    document.querySelector("#MensajeMail").innerHTML = "Bienvenido: " + MailUser + `<ul class ="LoginyRegistro"><li class="LogO"><a href = "#" id="LogOut" class="navlink">Logout</a></li></article></ul>`
    Loginn.style.display = "none"
    Registro.style.display = "none"
}
