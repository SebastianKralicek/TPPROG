let queryLc = location.search
console.log(location.search);
let queryStringObj = new URLSearchParams(queryLc)
let categoria = queryStringObj.get("categoria")
let categoriaaa = document.querySelector("#categoriajs")
console.log(categoria);

fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(function(response){
             return response.json()
            })


        .then (function(data){
            console.log(data);
            for(let i = 0; i < data.length; i++ ){
                categoriaaa.innerHTML += 
                `
                <section class="productos">
                <article class="descripcionprod">
                <h3 class="textotitulo">${data[i].title}</h3>  
                <img src="${data[i].image}" class="remeranegra">
        <section class="precioydesc">
            <article class="desc">${data[i].description}</article>
            <article class="precio1"><b>$${data[i].price}</b></article>
            <article class="precio">
                <a href="producto.html"><button class="botoncomprar">Saber Mas</button></a> 
            </article>
            </section> 
            </article>
        <a href="carrito.html" class="clickcompra"></a>
                `
    }
       
})
.catch(function(err){
    console.log(err);
})

let titulocat = document.querySelector('.tituloseccion')
titulocat.innerHTML = `<h2 class="tituloseccion">${categoria}</h2>`