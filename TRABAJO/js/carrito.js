let carritoentero = document.querySelector(".carrito-item")
let fotoproducto = ""
let finalizarcompra = document.querySelector("#Pagar")

let datalocal = localStorage.getItem("DatosDelLocal")

let dataparse = JSON.parse(datalocal)
console.log(datalocal);
console.log(dataparse);



if (datalocal == null ){
    carritoentero.innerHTML = `
    <h3 class="NoProducts"> No tienes productos aqui </h3>
    `
}
else{
    for (i = 0; i < dataparse.length; i++){
    fetch(`https://fakestoreapi.com/products/${dataparse[i].id}`) //Parecido a Producto
    .then(function(res){
        return res.json();
})
.then(function(data){
    console.log(data);
let fotoproducto = `
        <img class="imagenes-carrito" src="${data.image}" alt="" width="200px">
        <article class="carrito-item-detalles"> 
            <p class="carrito-item-titulo-1">${data.title}</p>
            <p class="carrito-item-precio-1">$${data.price}</p>
            <section class="filita-1"> 
        </article>
`
carritoentero.innerHTML += fotoproducto;
})
.catch(function(err){
    console.log(err);
})
}
finalizarcompra.addEventListener("click", function(){
    localStorage.removeItem("DatosDelLocal");
    alert("Gracias por su compra")
})
}



