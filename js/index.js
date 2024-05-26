
let homeSlider = document.querySelector("#homeSlider");
let contenido = document.querySelector("#contenido");
let counter = 0


window.onload = function () {
    let articulos = leerProductosAdmin();
    let categorias = leerCategoriasAdmin();
    console.log(articulos);
    console.log(categorias);
    articulos.filter(articulo => {

        if (articulo.categorias.includes("destacado")) {
            
            homeSlider.innerHTML += `
            <a class="text-decoration-none text-white" href="./paginaProducto.html">

            <div class="carousel-item h-100" onclick="paginaProducto(${articulo.id})">
                
                    <div class="imgContainer d-flex justify-content-center align-items-center h-100">
                        <img src="${articulo.imagen}" class="d-block" alt="${articulo.alt}">
                    </div>
                
            </div>
            </a>
            `;
            }
        })
    
    categorias.filter(categoria => {
        
        categoriaDisplay = categoria.nombre.replace(/([A-Z])/g, ' $1').trim();
        categoriaDisplay = categoriaDisplay[0].toUpperCase() + categoriaDisplay.substring(1);
        contenido.innerHTML += `
        <div class="container-fluid d-flex justify-content-center justify-content-xxl-end row">
      <section class="productosSection col-12 m-4 p-1 p-md-3 p-lg-4" >
        <h3 class="secondary-color">${categoriaDisplay}</h3>
        <div id="productos-${categoria.id}" style="min-height: 300px;" class="d-flex slider productos-${categoria.id} ms-lg-3">   
            <div class="arrow">
            <button class="left m-0" onclick="left(${categoria.id})"><</button>
            <button class="right m-0" onclick="right(${categoria.id})">></button>
            </div>
        </div>
      </section>
        </div>
        `;
        
        articulos.filter(articulo => {
            if (articulo.categorias.includes(categoria.nombre)) {
                document.querySelector(`#productos-${categoria.id}`).innerHTML += `
            <article id="${articulo.id}" onclick="paginaProducto(${articulo.id})" style="width: 85%; max-width: 300px; height:350px;" class="p-0 mx-4 p-sm-4 mx-md-3 mx-lg-4 col-lg-2 producto">
            <a class="text-decoration-none text-white" href="./paginaProducto.html">
                <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
                <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
                </div>
                <h5 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h5>
            </a>
            <div class="d-flex flex-column flex-sm-row justify-content-between my-4 text-white align-items-center">
                <h4>$${articulo.precio}</h4>
                <button class="btn botonCompra" onclick="agregarAlCarrito(${articulo.id})">Comprar</button>
                <div class="favBoton${articulo.id} favBoton" >
                    <svg xmlns="http://www.w3.org/2000/svg" onclick="agregarFavoritos(${articulo.id})" height="28px" viewBox="0 -960 960 960" width="28px" fill="#44d62c"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                </div>
            </div>
         </article> 
                `;
            }
        })
    
    
    })
}


function left(categoria) {
    let products = document.querySelectorAll(`.productos-${categoria} .producto`)
    
        if (counter == 0) {
            counter == products.length /  3 - 1
        }else{
            counter--
        }

        scroll(products,categoria)
}


function right(categoria) {
    let slider = document.querySelector(`.productos-${categoria}`)


    let products = document.querySelectorAll(`.productos-${categoria} .producto`)
    console.log(slider.clientWidth);
    if (slider.clientWidth>=580 && slider.clientWidth<=905) {
        if (counter == products.length/ 2 - 1 || counter == (products.length + 1) / 2 - 1) {
            counter= 0
        }else{
            counter++
        }
        scroll(products,categoria)
    }else if (slider.clientWidth>=906) {
        if (counter == products.length/ 3 - 1 || counter == (products.length + 2) / 3 - 1 || counter == (products.length + 1) / 3 - 1) {
            counter= 0
        }else{
            counter++
        }
        scroll(products,categoria)
    }else if (slider.clientWidth<=579) {
        if (counter == products.length - 1) {
            counter= 0
        }else{
            counter++
        }
        scroll(products,categoria)
    }
        

}

function scroll(products,categoria) {
    let slider = document.querySelector(`.productos-${categoria}`)
    console.log(slider.clientWidth);
    products.forEach(function(item) {
        item.style.transform = `translateX(-${counter * slider.clientWidth}px)`
    
    })
}

