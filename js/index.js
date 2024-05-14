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
      <section class="productosSection col-9 m-4 p-5" >
        <h3 class="secondary-color">${categoriaDisplay}</h3>
        <div id="productos-${categoria}" class="d-flex"></div>
      </section>
        </div>
        `;
        
        articulos.filter(articulo => {
            if (articulo.categorias.includes(categoria)) {
                document.querySelector(`#productos-${categoria}`).innerHTML += `
            <article id="${articulo.id}" onclick="paginaProducto(${articulo.id})" style="width: 85%; max-width: 300px; height:350px;" class="p-3 m-2 col-lg-2 ">
            <a class="text-decoration-none text-white" href="./paginaProducto.html">
                <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
                <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
                </div>
                <h5 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h5>
            </a>
            <div class="d-flex justify-content-between my-4 text-white">
                <h4>$${articulo.precio}</h4>
                <button class="btn botonCompra" onclick="agregarAlCarrito(${articulo.id})">Comprar</button>
                <svg xmlns="http://www.w3.org/2000/svg" onclick="agregarFavoritos(${articulo.id})" class="favBoton" height="28px" viewBox="0 -960 960 960" width="28px" fill="#44d62c"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                </div>
            </div>
         </article> 
                `;
            }
        })


    })
    })
.catch((error) => console.error("No se pudo conseguir la data:", error))