let busqueda = localStorage.getItem("busqueda");
let resultadosBusqueda = document.querySelector("#resultadosBusqueda");
console.log(busqueda);

fetch('../json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;

    articulos.filter(articulo => {
        if (articulo.keywords.includes(busqueda)) {

            resultadosBusqueda.innerHTML += `
            <article id="recientes-${articulo.id}" style="width: 85%; max-width: 300px; height:350px;" class="p-3 m-2 col-lg-2">
             <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
            <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
            </div>
            <h5 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h5>
            <div class="d-flex justify-content-between my-4">
                <h4>$${articulo.precio}</h4>
                <button class="btn btn-compra">Comprar</button>
            </div>
         </article> 
            `;
            
        }
    })


}).catch((error) => console.error("No se pudo conseguir la data:", error))