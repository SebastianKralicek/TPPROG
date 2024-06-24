let login = document.querySelector("#Loginn")
let msjbienvenida = document.querySelector("#MensajeMail")
let registroo = document.querySelector("#Register")

let linklogout = document.querySelector(".LogO")

linklogout.addEventListener("click", function(e){
    e.preventDefault
    localStorage.removeItem("MailsUsuarios")

linklogout.style.display = "none";
msjbienvenida.style.display = "none";
login.style.display = "block";
registroo.style.display = "block";

})


