
let campoEmailregistro = document.querySelector(`#emailregistro`)

let campoContraseñaregistro = document.querySelector(`#contraseñaregistro`)


let formulario = document.querySelector('.formregistro')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log(campoEmailregistro.value);
    if(campoEmailregistro.value == ''){
        alert('Por favor complete el campo email')
    }else if(campoContraseñaregistro.value == ''){
        alert('Por favor complete el campo contraseña')
    }else{
        
    }
}
)