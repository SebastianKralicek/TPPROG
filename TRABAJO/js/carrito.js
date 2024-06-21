let CarritoEntero = document.querySelector(".seccion1-items")
let FotoProducto = document.querySelector(".carrito-item")
let DetallesDelItem = document.querySelector('.carrito-item-detalles')

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
    for (i = 0; i < DataParse.length; i++)
    fetch(`https://fakestoreapi.com/products/${DataParse[i].id}`) //Parecido a Producto
    .then(function(res){
        return res.json();
})
.then(function(data){
    console.log(data);
let FotoProducto = `
    <article class="carrito-item"> 
        <img class="imagenes-carrito" src="${data[i].image}" alt="" width="200px">
        <article class="carrito-item-detalles"> 
            <p class="carrito-item-titulo-1">${data[i].title}</p>
            <p class="carrito-item-precio-1">$${data[i].price}</p>
            <section class="filita-1"> 
        </article>
    </article>
`
DetallesDelItem.innerHTML += FotoProducto;
})
.catch(function(err){
    console.log(err);
})

}
