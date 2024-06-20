
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get('id')

let DescProd = document.querySelector(".detalle-producto")
let Descripcion = ""

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    .then(function(data){
        console.log(data);
        for (i = 0; i < data.length; i++){
            let prod = data[i];
    Descripcion = `
<article class="imagen-de-producto"><img class="img-prod" src="${prod.image}"></article>
<section class="detalles-producto-der">
<article class="titulo-producto1"><h1>${prod.title}</h1></article>
<article class="precio-productito"><p>${prod.price}</p></article>
<article class="talles"><p>Talle</p><input class="talle" type="submit" value="M"><input class="talle" type="submit" value="L"><input class="talle" type="submit" value="XL"></article>
<a class="llevaralcarrito" href="./carrito.html"><button class="botoncomprar12" id="${prod.id}">Agregar al Carrito</button></a>
<h2 class="DETALLEDEPROD">DETALLE DEL PRODUCTO</h2>
<Article class="detalles-producto-der-abaj"><p>R${prod.description}</p></article>
</section>
`
DescProd.innerHTML = Descripcion
        }   
})
