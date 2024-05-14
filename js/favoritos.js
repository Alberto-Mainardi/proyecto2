function productosEnFavoritos(data) {
    console.log(data);
        window.localStorage.setItem("favoritos",JSON.stringify(data))
        return; 
}

function leerFavoritos() {
    let favoritos=localStorage.getItem("favoritos");
    return JSON.parse(favoritos)
}

function mostrarProductosFavoritos() {
    
    let productoFavorito=document.getElementById("favorito")
    console.log(document.querySelector(".mainfav"));
    productoFavorito.innerHTML=``;
    let productos = leerFavoritos();
    console.log(productos);
    console.log(productoFavorito);
    if (productos===null || productos.length===0) {
        productoFavorito.innerHTML=`
        <div class="d-flex justify-content-center flex-column align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#75FB4C">
                <path d="m480-121-41-37q-105.77-97.12-174.88-167.56Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.15 
                60.5-150.58Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.42Q880-733.15 880-643q0 46-16.5 
                91T806-451.5Q765-396 695.88-325.56 626.77-255.12 521-158l-41 37Zm0-79q101.24-93 166.62-159.5Q712-426 
                750.5-476t54-89.14q15.5-39.13 15.5-77.72 0-66.14-42-108.64T670.22-794q-51.52 0-95.37 
                31.5T504-674h-49q-26-56-69.85-88-43.85-32-95.37-32Q224-794 182-751.5t-42 108.82q0 38.68 15.5 78.18 15.5 39.5 54 
                90T314-358q66 66 166 158Zm0-297Z"/>
            </svg>
            <h4 class="m-3 mb-5 text-center" style="color:#75FB4C">Aun no hay ningun producto en tu lista de favoritos</h4> 
        </div>  
        
        ` 
    }else{
        productos.forEach(producto => {
            productoFavorito.innerHTML+=`
                <div class="text-white row align-items-center px-3">
                    <img width="200px" src="${producto.imagen}" alt="" class="img-fluid col-2 d-none d-sm-inline-block">
                    <div class="col-10">
                    <h4 class="mb-3">${producto.nombre}</h4>
                    <h5 class="mb-0">$${producto.precio}</h5>
                    <p class="fs-6">en 6 cuotas de $${producto.precio/6}</p>
                    <button class="btn p-0 border-0" id="botonEliminar" onclick="eliminarProductoFavorito(${producto.id})">Eliminar</button>
                    </div>
                    <div id="precioProducto${producto.id}" class="col-2">
                    </div>
                </div>
                <hr class="text-success">
        `
            
        });
    }
    
}

mostrarProductosFavoritos();

function eliminarProductoFavorito(id) {
    let productos = leerFavoritos();
    
    let nuevosProductos= productos.filter((producto) => {
            if (producto.id != id) {
            
                return producto;
    
            }
        
    })
    
    productosEnFavoritos(nuevosProductos);
    mostrarProductosFavoritos();

}


