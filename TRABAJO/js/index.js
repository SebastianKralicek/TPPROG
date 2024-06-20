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
product = `
    <article class="hombresCat">
    <section class="productos">
        <article class="descripcionprod">
            <h3 class="textotitulo">${data[i].title}</h3>   
            <img src="${data[i].image}" class="remeranegra">
    <section class="precioydesc">
        <p class="precio1"><b>$${data[i].price}</b></p>
        <article class="precio">
            <a href="producto.html"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
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
productMujer = `
<article class = "MujeresCat">
        <section class="productos">
            <article class="descripcionprod">
                <h3 class="textotitulo">${data[i].title}</h3>   
                <img src="${data[i].image}" class="remeranegra">
        <section class="precioydesc">
            <p class="precio1"><b>$${data[i].price}</b></p>
            <article class="precio">
                <a href="producto.html"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
</article>
`
mujer.innerHTML += productMujer;

}
})

// SECCION JOYERIA //
            
let joyas = document.querySelector(".JoyeriaCat")
let productJoyas = ""
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(function(response){
             return response.json()
            })

.then(function(data){
console.log(data);
for (i = 0; i < data.length; i++){
productJoyas = 
`
<article class="JoyasCat">
<section class="productos">
 <article class="descripcionprod">
            <h3 class="textotitulo">${data[i].title}</h3>   
            <img src="${data[i].image}" class="remeranegra">
    <section class="precioydesc">
        <p class="precio1"><b>$${data[i].price}</b></p>
        <article class="precio">
            <a href="producto.html"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
        </article>
</section>
</article>
`
joyas.innerHTML += productJoyas;

}
})