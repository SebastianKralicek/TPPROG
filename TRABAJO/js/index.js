/* SECCION DE HOMBRES*/

let hombre = document.querySelector(".hombresCat")
let product = "";

fetch('https://fakestoreapi.com/products/category/men\'s clothing')
            .then(function(response){
             return response.json()
            })


.then(function(data){
    console.log(data);
    for (i = 0; i < data.length; i++){
        let ropa = data[i];
product = `
    <article class="hombresCat">
    <section class="productos">
        <article class="descripcionprod">
            <h3 class="textotitulo">${ropa.title}</h3>   
            <img src="${ropa.image}" class="remeranegra">
    <section class="precioydesc">
        <p class="precio1"><b>$${ropa.price}</b></p>
        <article class="precio">
            <a href="producto.html"><button class="botoncomprar">Saber Mas</button></a>
            <a href="producto.html"><button class="botoncomprar" id="${ropa.id}">Agregar al Carrito</button></a>
        </article>
    </section>
        </article> `
hombre.innerHTML += product;
    }
}) 

/*SECCION DE MUJERES*/

let mujer = document.querySelector(".MujeresCat")
let productMujer = ""

fetch('https://fakestoreapi.com/products/category/women\'s clothing')
            .then(function(response){
             return response.json()
            })

.then(function(data){
    console.log(data);
for (i = 0; i < data.length; i++){
    let ropamujer = data[i];
productMujer = `
<article class = "MujeresCat">
        <section class="productos">
            <article class="descripcionprod">
                <h3 class="textotitulo">${ropamujer.title}</h3>   
                <img src="${ropamujer.image}" class="remeranegra">
        <section class="precioydesc">
            <p class="precio1"><b>$${ropamujer.price}</b></p>
            <article class="precio">
                <a href="producto.html"><button class="botoncomprar" id="${ropamujer.id}">Saber Mas</button></a>
                <a href="producto.html"><button class="botoncomprar">Agregar al Carrito</button></a>
</article>
`
mujer.innerHTML += productMujer;

}
})


            
