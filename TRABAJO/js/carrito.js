let CarritoEntero = document.querySelector(".carrito-item")
let FotoProducto = ""
let FinalizarCompra = document.querySelector("#Pagar")

let DataLocal = localStorage.getItem("DatosDelLocal")

let DataParse = JSON.parse(DataLocal)
console.log(DataLocal);
console.log(DataParse);



if (DataLocal == null ){
    CarritoEntero.innerHTML = `
    <h3 class="NoProducts"> No tienes productos aqui </h3>
    `
}
else{
    for (i = 0; i < DataParse.length; i++){
    fetch(`https://fakestoreapi.com/products/${DataParse[i].id}`) //Parecido a Producto
    .then(function(res){
        return res.json();
})
.then(function(data){
    console.log(data);
let FotoProducto = `
        <img class="imagenes-carrito" src="${data.image}" alt="" width="200px">
        <article class="carrito-item-detalles"> 
            <p class="carrito-item-titulo-1">${data.title}</p>
            <p class="carrito-item-precio-1">$${data.price}</p>
            <section class="filita-1"> 
        </article>
`
CarritoEntero.innerHTML += FotoProducto;
})
.catch(function(err){
    console.log(err);
})
}
FinalizarCompra.addEventListener("click", function(){
    localStorage.removeItem("DatosDelLocal");
    alert("Gracias por su compra")
})
}



