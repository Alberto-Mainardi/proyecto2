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
        
        productoCarrito.innerHTML+=`
            <div class="text-white row align-items-center px-3">
                <img width="200px" src="${producto.imagen}" alt="" class="img-fluid p-3 col-2">
                <div class="col-5 ">
                <p>${producto.nombre}</p>
                <button class="btn p-0 border-0" id="botonEliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </div>
                <div class="col-3 d-flex justify-content-center mb-3">
                <button id="botonDisminuir" class="m-0 border-0 p-2" onclick="disminuirProducto(${producto.id})">-</button>
                <p id="${producto.id}" class="m-0 p-2 bg-white text-dark" >1</p>
                <button class="m-0 border-0 p-2" onclick="aumentarProducto(${producto.id})">+</button>
                </div>
                <div class="col-2">
                <p class="text-center">$${producto.precio}</p>
                </div>
            </div>
            <hr class="text-success">
    `
    
    
    });
}

mostrarProductos()




function eliminarProducto(id) {
    let productos = leerProductos();
    let nuevosProductos = productos.filter((producto) => {
        if (producto.id != id) {
            return producto;
        }

    })
    productosEnCarrito(nuevosProductos);
    mostrarProductos()
}

function disminuirProducto(id){
    let productos = leerProductos();
    productos.find((producto) => {
        if (producto.id == id) {
                let valorBoton = parseInt(document.getElementById(`${producto.id}`).innerHTML) - 1;
                document.getElementById(`${producto.id}`).innerHTML = valorBoton
                
        }

    })
}

function aumentarProducto(id){
    let productos = leerProductos();
    productos.find((producto) => {
        if (producto.id == id) {
            let valorBoton = parseInt(document.getElementById(`${producto.id}`).innerHTML) + 1;
            document.getElementById(`${producto.id}`).innerHTML = valorBoton;
        }

    })
}

function mostrarResumen() {
    let sumaPrecio = 0
    let envio = 8000
    let total = 0
    let resumen=document.getElementById("resumenCompra")
    let productos = leerProductos();
    productos.forEach(producto=>{
        sumaPrecio += Number(producto.precio); 
        total = sumaPrecio+envio;
    })
        resumen.innerHTML+=`
        <p class="d-flex justify-content-between mx-4">
        <span>Productos</span>
        <span id="precioProductos">$${sumaPrecio}</span>
        </p>
        <p class="d-flex justify-content-between mx-4">
            <span>Envio</span>
            <span>$8.000</span>
        </p>
        <p class="d-flex justify-content-between mx-4">
            <span class="fs-4"><strong>Total</strong></span>
            <span class="fs-4" id="precioTotal"><strong>${total}</strong></span>
        </p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-success px-5 my-3 w-75"><span>Continuar compra</span></button>
        </div>
        `
}
mostrarResumen()