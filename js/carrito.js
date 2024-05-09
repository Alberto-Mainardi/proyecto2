let botonDisminuir="disabled"


function productosEnCarrito(data) {
    console.log(data);
    window.localStorage.setItem("productos",JSON.stringify(data))
    
}

function leerProductos() {
    let productos=localStorage.getItem("productos");
    return JSON.parse(productos)
}

function mostrarProductos() {
    
    let productoCarrito=document.getElementById("producto")
    let productos = leerProductos();
    productoCarrito.innerHTML=``;
   
    productos.forEach(producto => {
        let totalProducto = producto.precio
        productoCarrito.innerHTML+=`
            <div class="text-white row align-items-center px-3">
                <img width="200px" src="${producto.imagen}" alt="" class="img-fluid p-3 col-2">
                <div class="col-5 ">
                <p>${producto.nombre}</p>
                <button class="btn p-0 border-0" id="botonEliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </div>
                <div class="col-3 d-flex justify-content-center mb-3">
                <button id="botonDisminuir${producto.id}" class="m-0 border-0 p-2" onclick="disminuirProducto(${producto.id})" disabled>-</button>
                <p id="${producto.id}" class="m-0 p-2 bg-white text-dark" >1</p>
                <button class="m-0 border-0 p-2" onclick="aumentarProducto(${producto.id})">+</button>
                </div>
                <div id="precioProducto${producto.id}" class="col-2">
                <p  class="text-center">$${totalProducto}</p>
                </div>
            </div>
            <hr class="text-success">
    `
        calculos(producto.id);
    });
}

mostrarProductos()

function calculos(id) {
    let total=0
    let sumaProducto=0
    productos= leerProductos()
    let precioTotalProducto = document.getElementById(`precioProducto${id}`)
    let cantidad = tomarCantidad(id)
    console.log(cantidad);
    productos.forEach((producto,i)=>{
        if (producto.id==id) {
            sumaProducto += producto.precio * cantidad
        }
    })
    precioTotalProducto.innerHTML=`<p  class="text-center">$${sumaProducto}</p>`
    mostrarResumen(id,sumaProducto)
}


function eliminarProducto(id) {
    let productos = leerProductos();
    let nuevosProductos = productos.filter((producto) => {
        if (producto.id != id) {
            return producto;
        }

    })
    productosEnCarrito(nuevosProductos);
    mostrarProductos()
    mostrarResumen(id)
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
                calculos(id);
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

function mostrarResumen(id,totalProducto) {
    
    let productos = leerProductos();
    let resumen=document.getElementById("resumenCompra");
    let envio = seleccionarEnvio();
    let sumaPrecio = 0
    let total = 0
    
    productos.forEach(producto=>{
        if (producto.id==id) {
        let precioProducto = document.getElementById(`precioProducto${producto.id}`).textContent;
        let precioProductoNum = parseInt(precioProducto.substring(1))
        
        sumaPrecio += precioProductoNum; 
        total = sumaPrecio+envio;
        
        }
    })

    resumen.innerHTML=`
    <p class="d-flex justify-content-between mx-4">
    <span>Productos</span>
    <span id="precioProductos">$${sumaPrecio}</span>
    </p>
    <div id="precioEnvio" class="d-flex justify-content-between mx-4">
        <span>Envio</span>
        <span id="precioEnv">${envio}</span>
    </div>
    <p class="d-flex justify-content-between mx-4 m-4">
        <span class="fs-4"><strong>Total</strong></span>
        <span class="fs-4" id="precioTotal"><strong>$${total}</strong></span>
    </p>
    <div class="d-flex justify-content-center">
       
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success px-5 my-3 w-75" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Continuar compra
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
    `
}


let form = document.getElementById("form-envio")

form.addEventListener("submit",function(e) {
    e.preventDefault()
    let enviar = document.querySelector('input[name="tipo"]:checked').value;
    seleccionarEnvio(enviar)
    
})

function seleccionarEnvio(enviar) {
    let envio = 0
    if(enviar=="envio"){
        envio = 8000;
        let precioEnvio = document.getElementById("precioEnvio")
        precioEnvio.innerHTML=`
            <span>envio</span><span id="precioEnv">${envio}</span>
        `
        agregarTarjeta();
        

        return envio
    }
    return envio;
    
}


function agregarTarjeta() {
    let agregarTarjeta = document.querySelector("#exampleModal")
    console.log(agregarTarjeta);
    agregarTarjeta.innerHTML=`
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <form id="form-tarjeta" class="form">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="credito" name="tipo" value="envio"/>
                            <label for="credito" class="fs-3 ms-2">Tarjeta de credito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="debito" name="tipo" value="retirar"/>
                            <label for="debito" class="fs-3 ms-2">Tarjeta de debito</label>
                        </div>
                        <hr class="m-0">
                        <div class="forma-pago align-content-center ps-3">
                            <input type="radio" id="MerPago" name="tipo" value="retirar"/>
                            <label for="MerPago" class="fs-3 ms-2">MercadoPago</label>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" >Continuar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
                 
        `
}