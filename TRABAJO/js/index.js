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
        <p class="desc">${ropa.description}</p>
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

    


/* let productos = document.querySelector("#productos")

function ProductosIndex(){
   
    productos.forEach(producto =>{

        let section = document.createElement("section")
        section.classList.add("producto") 
        section.innerHTML = `
        <article class="descripcionprod">
            <h3 class="textotitulo">REMERAS</h3>   
            <img src="${producto.image}" class="remeranegra">
    <section class="precioydesc">
        <p class="desc">${producto.description}</p>
        <p class="precio1"><b>${producto.price}</b></p>
        <article class="precio">
            <a href="producto.html"><button class="botoncomprar" id="${producto.id}>Saber Mas</button></a>
            <a href="producto.html"><button class="botoncomprar">Agregar al Carrito</button></a>
        </article> `
    
        productos.append(section)
})
}
*/
