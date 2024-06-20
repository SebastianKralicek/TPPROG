let CarritoEntero = document.querySelector(".seccion1-items")
let FotoProducto = document.querySelector(".carrito-item")
let DetallesDelItem = document.querySelector('.carrito-item-detalles')

let DataLocal = localStorage.getItem("DatosLocalStorage")
let DataParse = JSON.parse(DataLocal)
console.log(DataLocal);
console.log(DataParse);


if (DataLocal == null ){
    CarritoEntero.innerHTML = `
    <h3> No tienes productos aqui </h3>
    `
}
else{
    for (i = 0; i < DataParse.length; i++)
    fetch(`https://fakestoreapi.com/products/"${DataParse[i]}`) //Parecido a Producto
    .then(res=>res.json())
    .then(json=>console.log(json))

.then (function(data){
    console.log(data);
CarritoEntero.innerHTML += `
    <article class="carrito-item"> 
        <img class="imagenes-carrito" src="${data[i].image}" alt="" width="200px">
        <article class="carrito-item-detalles"> 
            <p class="carrito-item-titulo-1">${data[i].title}</p>
            <p class="carrito-item-precio-1">$${data[i].price}</p>
            <section class="filita-1"> 
            <article class="selector-cantidad"> </article>
            <article class="minus-1">
            <i class="fas fa-minus"></i>
            </article>
            <input type="number" value="1" class="carrito-item-cantidad" disabled> 
            <article class="plus-1"> 
            <i class="fas fa-plus"> </i>
            </article>
              </section>
              <article class="btn-eliminar-1"> 
                <i class="fas fa-trash"></i>
            </article>
        </article>
    </article>
`
})
.catch(function(err){
    console.log(err);
})

}
