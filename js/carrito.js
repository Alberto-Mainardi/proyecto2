let botonDisminuir="disabled"
let total = 0;
let envio = 0;

function productosEnCarrito(data) {
    console.log(data);
        window.localStorage.setItem("productos",JSON.stringify(data))
        return; 
}

function leerProductos() {
    let productos=localStorage.getItem("productos");
    return JSON.parse(productos)
    
}

function mostrarProductos() {
    let productoCarrito=document.getElementById("producto")
    let productos = leerProductos();
    productoCarrito.innerHTML=``;
    if (productos===null || productos.length===0) {
        productoCarrito.innerHTML+=`
        <div class="d-flex justify-content-center flex-column align-items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" height="250px" viewBox="0 -960 960 960" width="250px" fill="#75FB4C">
            <path d="M640-452h-35l-59-60h85l126-228H316l-60-60h529q26 0 38 21.5t-2 46.5L680-476q-5.87 11.43-14.93 17.71Q656-452 640-452ZM286.79-81Q257
            -81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21ZM851-35 595-289H277q-38 0-56-27.5t1-59.5l
            70-117-86-187L46-840l43-43L894-78l-43 43ZM535-349 434-453h-95l-63 104h259Zm96-163h-85 85Zm57 431q-29 0-50.5-21.21t-21.5-51Q616-183 637.5-2
            04t50.5-21q29 0 50.5 21.21t21.5 51Q760-123 738.5-102T688-81Z"/>
            </svg>
            <h3 class="m-3 mb-5" style="color:#75FB4C">No hay productos en el carrito </h3>
        </div>   
        
        ` 
        mostrarResumen()
    }else{
        productos.forEach(producto => {
            productoCarrito.innerHTML+=`
                <div class="text-white row align-items-center px-3">
                    <img width="200px" src="${producto.imagen}" alt="" class="img-fluid p-3 col-2 d-none d-sm-inline-block">
                    <div class="col-5 ">
                    <p>${producto.nombre}</p>
                    <button class="btn p-0 border-0" id="botonEliminar" onclick="eliminarProducto(${producto.id},${producto.precio})">Eliminar</button>
                    </div>
                    <div class="col-3 d-flex justify-content-center mb-3">
                    <button id="botonDisminuir${producto.id}" class="m-0 border-0 p-2" onclick="disminuirProducto(${producto.id})" disabled>-</button>
                    <p id="${producto.id}" class="m-0 p-2 bg-white text-dark" >1</p>
                    <button class="m-0 border-0 p-2" onclick="aumentarProducto(${producto.id})">+</button>
                    </div>
                    <div id="precioProducto${producto.id}" class="col-2">
                    <p  class="text-center">$${producto.precio}</p>
                    </div>
                </div>
                <hr class="text-success">
        `
            calculos(producto.id);
            
        });
    }
    
}

mostrarProductos()

function calculos(id) {
    let sumaProducto=0
    productos= leerProductos()
    let precioTotalProducto = document.getElementById(`precioProducto${id}`)
    let cantidad = tomarCantidad(id)
    console.log(cantidad);
    productos.forEach((producto)=>{
        if (producto.id==id) {
            let precio = parseInt(producto.precio)
            sumaProducto += producto.precio * cantidad
            total += precio;
            console.log(total);
        }
    })
    precioTotalProducto.innerHTML=`<p  class="text-center">$${sumaProducto}</p>`

    
    mostrarResumen()
}


function calculoResta(id) {
    let sumaProducto=0
    productos= leerProductos()
    let precioTotalProducto = document.getElementById(`precioProducto${id}`)
    let cantidad = tomarCantidad(id)
    console.log(cantidad);
    productos.forEach((producto)=>{
        if (producto.id==id) {
            let precio = parseInt(producto.precio)
            sumaProducto += producto.precio * cantidad
            total -= precio;
            console.log(total);
        }
    })
    precioTotalProducto.innerHTML=`<p  class="text-center">$${sumaProducto}</p>`

    
    mostrarResumen()
    return

}

function calculoRestaEliminar(id) {
    productos= leerProductos()
    let cantidad = tomarCantidad(id)
    console.log(cantidad);
    productos.forEach((producto)=>{
        if (producto.id==id) {
            
            total -= producto.precio * cantidad;
            console.log(total);
        }
    })

    mostrarResumen()
    return

}

function eliminarProducto(id) {
    let productos = leerProductos();
    cantidad = tomarCantidad(id);
    calculoRestaEliminar(id);
    
    let nuevosProductos= productos.filter((producto) => {
            if (producto.id != id) {
            
                return producto;
    
            }
        
    })
    
    productosEnCarrito(nuevosProductos);
    mostrarResumen(id)
    mostrarNuevosProductos();
    mostrarHeader()

}


function mostrarNuevosProductos() {
    let productoCarrito=document.getElementById("producto")
    let productos = leerProductos();
    productoCarrito.innerHTML=``;
    if (productos.length===0) {
        productoCarrito.innerHTML+=`
        <div class="d-flex justify-content-center flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="250px" viewBox="0 -960 960 960" width="250px" fill="#75FB4C">
            <path d="M640-452h-35l-59-60h85l126-228H316l-60-60h529q26 0 38 21.5t-2 46.5L680-476q-5.87 11.43-14.93 17.71Q656-452 640-452ZM286.79-81Q257
            -81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21ZM851-35 595-289H277q-38 0-56-27.5t1-59.5l
            70-117-86-187L46-840l43-43L894-78l-43 43ZM535-349 434-453h-95l-63 104h259Zm96-163h-85 85Zm57 431q-29 0-50.5-21.21t-21.5-51Q616-183 637.5-2
            04t50.5-21q29 0 50.5 21.21t21.5 51Q760-123 738.5-102T688-81Z"/>
            </svg>
            <h3 class="m-3 mb-5" style="color:#75FB4C">No hay productos en el carrito </h3>
        </div>   
        
        ` 
        mostrarResumen();
    }else{
        productos.forEach(producto => {
        
            productoCarrito.innerHTML+=`
                <div class="text-white row align-items-center px-3">
                    <img width="200px" src="${producto.imagen}" alt="" class="img-fluid p-3 col-2">
                    <div class="col-5 ">
                    <p>${producto.nombre}</p>
                    <button class="btn p-0 border-0" id="botonEliminar" onclick="eliminarProducto(${producto.id},${producto.precio})">Eliminar</button>
                    </div>
                    <div class="col-3 d-flex justify-content-center mb-3">
                    <button id="botonDisminuir${producto.id}" class="m-0 border-0 p-2" onclick="disminuirProducto(${producto.id})" disabled>-</button>
                    <p id="${producto.id}" class="m-0 p-2 bg-white text-dark" >1</p>
                    <button class="m-0 border-0 p-2 text-dark" onclick="aumentarProducto(${producto.id})">+</button>
                    </div>
                    <div id="precioProducto${producto.id}" class="col-2">
                    <p  class="text-center">$${producto.precio}</p>
                    </div>
                </div>
                <hr class="text-success">
        `
    })
     
    }
    
}


function tomarCantidad(id) {
    let valorBoton = parseInt(document.getElementById(`${id}`).innerHTML);
    return valorBoton
}

function disminuirProducto(id){
    let productos = leerProductos();
    productos.find((producto) => {
        if (producto.id == id) {
                let botonMenos=document.getElementById(`botonDisminuir${producto.id}`)
                let valorActual= tomarCantidad(id);
                let valorBoton = valorActual - 1;
                document.getElementById(`${producto.id}`).innerHTML = valorBoton
                if (valorBoton==1) {
                    botonMenos.disabled=true
                }
                
                calculoResta(id);
                return

        }

    })
}

function aumentarProducto(id){
    let productos = leerProductos();
    productos.find((producto) => {
        if (producto.id == id) {
            let valorActual= tomarCantidad(id);
            let valorBoton = valorActual + 1;
            console.log(valorBoton);
            document.getElementById(`${producto.id}`).innerHTML = valorBoton;
            let botonMenos=document.getElementById(`botonDisminuir${producto.id}`)
            botonMenos.disabled=false
            calculos(id);
            return 
        }
        

    })
}

function mostrarResumen() {


    let productos = leerProductos();
    let resumen=document.getElementById("resumenCompra");

    if (productos===null || productos.length===0) {
        resumen.innerHTML=`
        <div class="">
            <p class="m-3 p-2 fs-5" style="color:grey">Aqui veras el importe de tu compra</p>
        </div>   
        
        ` 
    }else{
        resumen.innerHTML=`
        <p class="d-flex justify-content-between mx-4">
        <span>Productos</span>
        <span id="precioProductos">$${total}</span>
        </p>
        <div id="precioEnvio" class="d-flex justify-content-between mx-4">
            <span>Envio</span>
            <span id="precioEnv">$${envio}</span>
        </div>
        <p class="d-flex justify-content-between mx-4 m-4">
            <span class="fs-4"><strong>Total</strong></span>
            <span class="fs-4" id="precioTotal"><strong>$${total+envio}</strong></span>
        </p>
        <div class="d-flex justify-content-center">
           
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success px-5 my-3 w-75 botonCompra botonBorde" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Continuar compra
            </button>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg ">
                <div class="modal-content productosSectionModal secondary-color ">
                    <div class="modal-header border-dark">
                    <h1 class="modal-title fs-5 " id="exampleModalLabel">Forma de entrega</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <form id="form-envio" class="form">
                            <div class="forma-envio align-content-center ps-3">
                                <input type="radio" id="envio" name="tipo" value="envio"/>
                                <label for="envio" class="fs-3 ms-2">Envio a domicilio</label>
                                <span class="fs-3 position-relative start-50 ms-5">$8000</span>
                            </div>
                            <hr class="m-0 border-1">
                            <div class="forma-envio align-content-center ps-3">
                                <input type="radio" id="retirar" name="tipo" value="retirar"/>
                                <label for="retirar" class="fs-3 ms-2">Retirar de la sucursal</label>
                            </div>
                            
                            <div class="modal-footer rounded-bottom-5 border-dark">
                                <button type="button" class="btn botonModal" onclick="seleccionarMetPago() " >Continuar</button>
                            </div>
                        </form>
    
                    </div>
                </div>
            </div>
    
        </div>
        `
    }
    
    return
    
}


function seleccionarMetPago()  {
    let enviar = document.querySelector('input[name="tipo"]:checked').value;

    if(enviar=="envio"){
        envio = 8000;
        
        let agregarTarjeta = document.querySelector("#exampleModal");
        agregarTarjeta.innerHTML=`
            <div class="modal-dialog modal-lg">
            <div class="modal-content productosSectionModal secondary-color ">
                <div class="modal-header border-dark">
                <h1 class="modal-title fs-5" id="exampleModalLabel secondary-color ">Metodo de pago</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <form id="form-tarjeta" class="form">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="credito" name="tipo" value="credito"/>
                            <label for="credito" class="fs-3 ms-2">Tarjeta de credito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="debito" name="tipo" value="debito"/>
                            <label for="debito" class="fs-3 ms-2">Tarjeta de debito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="merPago" name="tipo" value="merPago"/>
                            <label for="merPago" class="fs-3 ms-2">Mercado Pago</label>
                        </div>
                        
                        <div class="modal-footer border-dark">
                            <button type="button" class="btn botonModal" onclick="agregarDatosTarjeta()" >Continuar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
                 
        `
       
    }else  if (enviar=="retirar") {
        envio=0
        console.log(enviar);    
        let agregarTarjeta = document.querySelector("#exampleModal");
        agregarTarjeta.innerHTML=`
            <div class="modal-dialog modal-lg ">
            <div class="modal-content productosSectionModal secondary-color ">
                <div class="modal-header border-dark">
                <h1 class="secondary-color modal-title fs-5" id="exampleModalLabel">Metodo de pago</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <form id="form-tarjeta" class="form">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="credito" name="tipo" value="credito"/>
                            <label for="credito" class="fs-3 ms-2">Tarjeta de credito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="debito" name="tipo" value="debito"/>
                            <label for="debito" class="fs-3 ms-2">Tarjeta de debito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="merPago" name="tipo" value="merPago"/>
                            <label for="merPago" class="fs-3 ms-2">Mercado Pago</label>
                        </div>
                        
                        <div class="modal-footer border-dark">
                            <button type="button" class="btn botonModal"  onclick="agregarDatosTarjeta()" >Continuar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
                 
        `
    }
    
    
}


function agregarDatosTarjeta() {
    let formaPago = document.querySelector('input[name="tipo"]:checked').value;
        if(formaPago=="credito" || formaPago=="debito"){
        let agregarDatosTarjeta = document.querySelector("#exampleModal")
        agregarDatosTarjeta.innerHTML=`
        
        <div class="modal-dialog modal-lg ">
        <div class="modal-content productosSectionModal secondary-color ">
            <div class="modal-header border-dark">
            <h1 class="modal-title fs-5 secondary-color " id="exampleModalLabel">Datos de la tarjeta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <form id="form-datos" class="form">
                    <section class="row align-items-center">
                        <div class="col-6">
                            <div class="forma-pago align-content-center ps-3">
                                <input type="number" placeholder="Numero de la tarjeta" class="w-100 p-2 my-3 " required/> 
                            </div>
                            <div class="forma-pago align-content-center ps-3">
                                <input type="text" id="debito" placeholder="Titular de la Tarjeta" class="w-100 p-2 my-3" required/>
                            </div>
                            <div class="forma-pago align-content-center ps-3 d-flex justify-content-between">
                                <input type="date" id="date" value="Fecha de vencimiento" class="d-inline p-2 my-3 input-fechaVenc" required/>
                                <input type="number" id="codigoSeguridad" placeholder="Codigo de seguridad" class="d-inline p-2 my-3 input-codigoSeg" required/>
                            </div>  
                        </div>
                        <div class="col-6 p-4 text-center">
                            <img class="w-75 h-50 rounded-4" src="../media/tarjeta.jpg" alt="MDN" />                    
                        </div>
                    </section>
                    <div class="modal-footer border-dark">
                        <button type="submit" class="btn botonModal" data-bs-dismiss="modal">Continuar</button>
                    </div>
                </form>
    
                </div>
            </div>
        < /div>
             
    `
    finalizarCompra()
           
        }else if (formaPago=="merPago"){
            // window.open("https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MrNGC_9qVafaxuWeEoOz6Z92pcAFdBXM143Tu_Nkz9aS3laDDilZPxoCgRAQAvD_BwE", '_blank');
            location.href="https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MrNGC_9qVafaxuWeEoOz6Z92pcAFdBXM143Tu_Nkz9aS3laDDilZPxoCgRAQAvD_BwE"
        finalizarCompra()

        }

}

function finalizarCompra() {

    let finalizar=document.querySelector("#form-datos");

    finalizar.addEventListener("submit",function(e) {
        // console.log(envio);
        e.preventDefault();
        mostrarResumen();
        agregarTextoPagina();
    })
    
}





