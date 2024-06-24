
console.log(location.search); // MUESTRA EL ID

let queryString = location.search; // LO HACEMOS VARIABLE PARA DARLE USO
let queryStringObj = new URLSearchParams(queryString); 
let id = queryStringObj.get("id")

console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function(res){
                return res.json()
        })
            
.then(function(data){
        console.log(data);
let detalleprod = document.querySelector(".detalle-producto")
detalleprod.innerHTML = `
<article class="imagen-de-producto"><img class="img-prod" src="${data.image}"></article>
<section class="detalles-producto-der">
<article class="titulo-producto1"><h1>${data.title}</h1></article>
<a href ="./categoria.html" class="categoriaJS"><p>${data.category}</p></a>
<article class="precio-productito"><p class="precioJS">$${data.price}</p></article>
<a id="Comprar" class="llevaralcarrito" href="./carrito.html"><button class="botoncomprar12">Agregar al Carrito</button></a>
<h2 class="DETALLEDEPROD">DETALLE DEL PRODUCTO</h2>
<Article class="detalles-producto-der-abaj"><p>${data.description}</p></Article>
`

// BOTON AGREGAR A CARRITO (EL ID PARA QUE QUEDE)
let agregarcarrito = document.querySelector("#Comprar")
let datoslocal = localStorage.getItem("DatosDelLocal")
let ids = {id: id} 

agregarcarrito.addEventListener("click", function(e){
        e.preventDefault
if(datoslocal == null){
let array = []
        array.push(ids)
let datosastring = JSON.stringify(array);
localStorage.setItem("DatosDelLocal", datosastring);
} 
else{
    let array = JSON.parse(datoslocal);
    array.push(ids)
let datosastring = JSON.stringify(array);    
localStorage.setItem("DatosDelLocal", datosastring);
}
console.log(localStorage);
})
})
.catch(function(err){
        console.log(err);
 })

    