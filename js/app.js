let recientes = document.querySelector("#recientes");
fetch('./json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    articulos.forEach(articulo => {
        recientes.innerHTML += `
        <article id="${articulo.id}" style="max-width: 400px; background-color: white; border-radius: 1rem" class="p-3 m-2 border border-2 col-lg-2">
        <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
        <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
        </div>
        <h4 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h4>
        <div class="d-flex justify-content-between my-4">
            <h3>$${articulo.precio}</h3>
            <button class="btn btn-primary">Comprar</button>
        </div>
        <p class="text-justify"><strong>Descripción</strong> <br>
        ${articulo.descripcion}
        </p>
    </article> 
        `;
    });
})
.catch((error) => console.error("No se pudo conseguir la data:", error))
