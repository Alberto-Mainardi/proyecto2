let carrito=[]
let recientes = document.querySelector("#recientes");

console.log(carrito);
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
            <button class="btn btn-primary" onclick="agregarAlCarrito(${articulo.id})">Comprar</button>
        </div>
        <p class="text-justify"><strong>Descripción</strong> <br>
        
        </p>
    </article> 
        `;
    });
})
.catch((error) => console.error("No se pudo conseguir la data:", error))


fetch('./json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    articulos.forEach(articulo => {
        let id = articulo.id
        agregarPagina(id)
    });
})
.catch((error) => console.error("No se pudo conseguir la data:", error))

function agregarPagina(id) {
    fetch('./json/articulos.json').then((response) => response.json())
            .then((data) => {
                let articulos = data.articulos;
                let pagina = document.querySelector(`#pagina${id}`);
                articulos.find(articulo=>{
                    
                    if (articulo.id==id) {
                        pagina.innerHTML=`
                        <header>
                            <nav class="text-center fs-6 m-4 text-white">Nav</nav>
                        </header>
                        <main class="container" id="paginaProducto">
                            <section class="row justify-content-center ">
                                <div class="col-7 bg-black p-0">
                                    <article class="d-flex justify-content-center p-0" > 
                                        <img id="imgPaginaProducto" width="200px" src="${articulo.imagen}" alt="" class="img-fluid p-0 col-2">
                                    </article>
                                    
                                </div>
                                <div class="col-4 bg-dark-subtle p-0 columnaPagina" >
                                    <h4 class="m-3 p-2">${articulo.nombre}</h3>
                                    <hr>
                                    <h1 class="m-3 p-2 mb-0">$ ${articulo.precio}</h2>
                                    <p class="fs-5 m-0 mx-3 px-2">en 6 cuotas de $${articulo.precio/6}</p>
                                    <p class="fs-6 mx-3 px-2 text-primary">Ver medios de pago</p>

                                    <p class="fs-6 m-3 mt-4 px-2 pt-2">Precio de envio $8000</p>

                                    <div class="align-items-center d-flex flex-column mx-3 px-2">
                                    <button type="button" class="btn btn-success p-3 mt-5 text-center w-100 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Comprar ahora
                                    </button>
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body p-0">
                                                <form id="form-envio" class="form">
                                                    <div class="forma-envio align-content-center ps-3">
                                                        <input type="radio" id="envio" name="tipo" value="envio"/>
                                                        <label for="envio" class="fs-3 ms-2">Envio a domicilio</label>
                                                        <span class="fs-3 position-relative start-50 ms-5">$8000</span>
                                                    </div>
                                                    <hr class="m-0">
                                                    <div class="forma-envio align-content-center ps-3">
                                                        <input type="radio" id="buscar" name="tipo" value="retirar"/>
                                                        <label for="buscar" class="fs-3 ms-2">Retirar de la sucursal</label>
                                                    </div>
                                                    
                                                    <div class="modal-footer">
                                                        <button type="submit" class="btn btn-primary" >Continuar</button>
                                                    </div>
                                                </form>
                            
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                                    <button type="button" class="btn btn-secondary p-3 mt-2  text-center w-100" onclick="agregarAlCarrito(${articulo.id})" >
                                        Agregar al carrito
                                    </button>
                                    </div>
                                </div>
                            </section>
                            <section class="row justify-content-center">

                                <div class="col-7 bg-black p-0">
                                    <hr class="text-success border-5 mt-0">
                                    <h1 class="px-5 mx-4 text-white">Descripcion</h1>
                                    <p class="px-5 mx-4 text-white">${articulo.descripcion}</p>
                                </div> 
                                <div class="col-4 bg-black p-0 columnaPagina">
                                <hr class="text-success border-5 mt-0">
                                </div>
                            </section>
                        </main>
                        `
                    } 
            })
            

     }).catch((error) => console.error("No se pudo conseguir la data:", error))
}


function agregarAlCarrito(id){
    fetch('./json/articulos.json').then((response) => response.json())
            .then((data) => {
                let articulos = data.articulos;
                articulos.find((articulo,i)=>{
                    
                    if (articulo.id==id) {
                        if (carrito.length===0 || carrito[carrito.length-1].id!=id) {   
                            carrito = [...carrito,{id:articulo.id,nombre:articulo.nombre,precio:articulo.precio,imagen:articulo.imagen}];
                            console.log(carrito);
                            productosEnCarrito(carrito)
                            mostrarProductos()
                    } 
                   
            }
            

     }).catch((error) => console.error("No se pudo conseguir la data:", error))
})
}