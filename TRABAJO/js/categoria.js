console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let category = queryStringObj.get("category")

console.log(category);
            
    let producctt = document.querySelector(".contenedoresIndexuno")
    let especifico="";
         
    fetch ('https://fakestoreapi.com/products/category/men\'s clothing')

    .then (function(response){
        return response.json();
    })

    .then (function(data){
        console.log(data);
especifico = <section class= "contenedoresIndexuno">
        
         for (let i=0; i <data.length;> i++){
            let stock = data [i];
            console.log(stock);
            console.log(stock.title);
            console.log(stock.image);
            console.log(stock.description);
           

            especifico=especifico+  `
            <article class="hombresCat">
            <section class="productos">
                <article class="descripcionprod">
                    <h3 class="textotitulo">${data[i].title}</h3>   
                    <a href="./producto.html?id=${data[i].id}"><img src="${data[i].image}" class="remeranegra"></a>
            <section class="precioydesc">
                <p class="precio1"><b>$${data[i].price}</b></p>
                <article class="precio">
                    <a href="./producto.html?id=${data[i].id}"><button class="botoncomprar" id="${data[i].id}">Saber Mas</button></a>
                </article>
            </section>
                </article> `;
}
        
            especifico=especifico+ </section>
            producctt.innerHTML = especifico;
        }
    )
    .catch (function(err){
        console.log(err);

    })