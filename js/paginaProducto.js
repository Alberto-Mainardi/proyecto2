window.onload=function () {
    let articulo = leerPagina();
    agregarTextoPagina(articulo) 
    
}


function agregarTextoPagina(articulo) {
let pagina = document.querySelector(`#pagina`);

            pagina.innerHTML=`
            
                <section class="row justify-content-center w-100 gap-2">
                    <div class="col-lg-7 col-sm-12 bg-black p-0 productosSection" >
                        <article class="d-flex justify-content-center p-0" > 
                            <img id="imgPaginaProducto" width="200px" src="${articulo.imagen}" alt="" class="img-fluid p-0 col-2">
                        </article>
                        <hr class="border-3 mt-0 hr-color">
                        <h1 class="px-2 mx-2 px-lg-5 mx-lg-4 text-white">Descripcion</h1>
                        <p class="px-2 mx-2 px-lg-5 mx-lg-4 text-white">${articulo.descripcion}</p>
                    </div>
                    <div class="col-lg-4 col-sm-12 bg-dark-subtle  pb-3 p-lg-0 columnaPagina productosSection" >
                        <div class="columnaPaginaSticky pb-4">
                            <h4 class="m-3 p-2">${articulo.nombre}</h3>
                            <hr>
                            <h1 class="m-3 p-2 mb-0">$ ${articulo.precio}</h2>
                            <p class="fs-5 m-0 mx-3 px-2">en 6 cuotas de $${(articulo.precio/6).toFixed(2)}</p>
                            <p id="verMetodosPago" class="fs-6 mx-3 px-2 text-primary" data-bs-toggle="modal" data-bs-target="#exampleModalMetodos">Ver medios de pago</p>


                            <p class="fs-6 m-3 my-3 px-2 pt-2">Precio de envio $8000</p>

                            <div class="align-items-center d-flex flex-column mx-3 px-2 ">
                                <button type="button" id="botonCompra" class="btn btn-success p-3 mt-3 text-center w-100 botonCompra" onclick="comprarAhoraClick()">
                                    Comprar ahora
                                </button>
                                <button type="button" class="btn btn-secondary p-3 mt-2 text-center w-100 botonAgregar" onclick="agregarAlCarrito(${articulo.id})" >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
        
            <!-- Modal1 -->
            <div class="modal fade" id="ventanaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                <div class="modal-content productosSectionModal secondary-color">
                    <div class="modal-header border-dark">
                    <h1 class="modal-title fs-5 secondary-color" id="exampleModalLabel">Forma de entrega</h1>
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
                            
                            <div class="modal-footer border-dark">
                                <button type="button" class="btn botonModal" onclick="seleccionarMetPago();agregarTextoPagina()" >Continuar</button>
                            </div>
                        </form>
    
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal2 -->
        <div class="modal fade" id="exampleModalMetodos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel secondary-color">Metodos de pago</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <form id="form-envio" class="form">
                        <div>
                            <h3 class="ps-4 mt-3 ms-2">Tarjetas de credito</h3>
                            <img class="w-75 ps-4" src="./media/metodosPago1.jpg" alt="MDN" />
                        </div>
                        <hr class="m-0">
                        <div>
                            <h3 class="ps-4 mt-3 ms-2">Tarjetas de debito</h3>
                            <img class="w-75 ps-4" src="./media/metodosPago2.jpg" alt="MDN" />
                        </div>
                        
                  
                    </form>

                </div>
            </div>
        </div>
                        
            `

}

