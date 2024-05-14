let homeSlider = document.querySelector("#homeSlider");
let contenido = document.querySelector("#contenido");
fetch('../json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    let categorias = data.categorias;
    articulos.filter(articulo => {

        if (articulo.categorias.includes("destacado")) {
            
            homeSlider.innerHTML += `
            <div class="carousel-item h-100">
            <div class="imgContainer d-flex justify-content-center align-items-center h-100">
            <img src="${articulo.imagen}" class="d-block" alt="${articulo.alt}">
            </div>
          </div>
            `;
            }
        })
    categorias.filter(categoria => {
        
        categoriaDisplay = categoria.replace(/([A-Z])/g, ' $1').trim();
        categoriaDisplay = categoriaDisplay[0].toUpperCase() + categoriaDisplay.substring(1);
        contenido.innerHTML += `
        <div class="container-fluid d-flex justify-content-center row">
      <section class="productosSection col-9 m-4 p-5">
        <h3>${categoriaDisplay}</h3>
        <div id="productos-${categoria}" class="d-flex"></div>
      </section>
        </div>
        `;
        
        articulos.filter(articulo => {
            if (articulo.categorias.includes(categoria)) {
                document.querySelector(`#productos-${categoria}`).innerHTML += `
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


    })
    })
.catch((error) => console.error("No se pudo conseguir la data:", error))