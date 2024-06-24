let mailuser = localStorage.getItem("MailsUsuarios")
let header = document.querySelector("header")
let loginn = document.querySelector("#Loginn")
let registro = document.querySelector("#Register")

if (mailuser == ""){
     loginn.style.display = "block"
     registro.style.display = "block"
}
else if (mailuser == null){
    loginn.style.display = "block"
     registro.style.display = "block"
}
else {
    document.querySelector("#MensajeMail").innerHTML = "Bienvenido: " + mailuser + `<ul class ="LoginyRegistro"><li class="LogO"><a href = "#" id="LogOut" class="navlink">Logout</a></li></article></ul>`
    loginn.style.display = "none"
    registro.style.display = "none"
}
