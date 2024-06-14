let results = fetch('https://fakestoreapi.com/products')
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let results = document.querySelector("#productos")
    for (i = 0; i < data.length; i++){
results.innerHTML = `
        <article class="descripcionprod">
            <h3 class="textotitulo">${data[i].title}</h3>   
            <img src="${data[i].image}" alt="${data[i].title} class="remeranegra">
    <section class="precioydesc">
        <p class="desc">${data[i].description}</p>
        <p class="precio1"><b>${data[i].price}</b></p>
        <article class="precio">
            <a href="producto.html"><button class="botoncomprar">Saber Mas</button></a>
            <a href="producto.html"><button class="botoncomprar">Agregar al Carrito</button></a>
        </article> `
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
