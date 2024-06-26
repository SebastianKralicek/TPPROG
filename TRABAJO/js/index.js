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
            <a href="./producto.html?id=${data[i].id}"><img src="${data[i].image}" class="remeranegra"></a>
    <section class="precioydesc">
        <p class="precio1"><b>$${data[i].price}</b></p>
        <p class="desc">${data[i].description}</p>
        <article class="precio">
            <a href="./producto.html?id=${data[i].id}"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
        </article>
    </section>
        </article> `
hombre.innerHTML += product;
    }
})
.catch(function(err){
    console.log(err);
})


/*SECCION DE MUJERES*/

let mujer = document.querySelector(".MujeresCat")
let productmujer = ""

fetch('https://fakestoreapi.com/products/category/women\'s clothing')
            .then(function(response){
             return response.json()
            })

.then(function(data){
    console.log(data);
for (i = 0; i < data.length; i++){
productmujer = `
<article class = "MujeresCat">
        <section class="productos">
            <article class="descripcionprod">
                <h3 class="textotitulo">${data[i].title}</h3>   
               <a href="./producto.html?id=${data[i].id}"><img src="${data[i].image}" class="remeranegra"></a>
        <section class="precioydesc">
            <p class="precio1"><b>$${data[i].price}</b></p>
            <p class="desc">${data[i].description}</p>
            <article class="precio">
                <a href="./producto.html?id=${data[i].id}"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
</article>
`
mujer.innerHTML += productmujer;
}
})

.catch(function(err){
    console.log(err);
})


// SECCION JOYERIA //
            
let joyas = document.querySelector(".JoyeriaCat")
let productjoyas = ""
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(function(response){
             return response.json()
            })

.then(function(data){
console.log(data);
for (i = 0; i < data.length; i++){
productjoyas = 
`
<article class="JoyasCat">
<section class="productos">
 <article class="descripcionprod">
            <h3 class="textotitulo">${data[i].title}</h3>   
          <a href="./producto.html?id=${data[i].id}"><img src="${data[i].image}" class="remeranegra"></a>
    <section class="precioydesc">
        <p class="precio1"><b>$${data[i].price}</b></p>
        <p class="desc">${data[i].description}</p>
        <article class="precio">
            <a href="./producto.html?id=${data[i].id}"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
        </article>
</section>
</article>
`
joyas.innerHTML += productjoyas;

}
})

.catch(function(err){
    console.log(err);
})