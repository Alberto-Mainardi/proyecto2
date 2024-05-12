let carrito=[]
let recientes = document.querySelector("#recientes");

fetch('./json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    articulos.forEach(articulo => {
        recientes.innerHTML += `
        <article id="${articulo.id}" onclick="paginaProducto(${articulo.id})" style="max-width: 400px; background-color: white; border-radius: 1rem" class="p-3 m-2 border border-2 col-lg-2">
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

function paginaProducto(id) {
    fetch('./json/articulos.json').then((response) => response.json())
    .then((data) => {
    let articulos = data.articulos;
    articulos.forEach(articulo => {
        if (articulo.id==id) {
            window.localStorage.setItem("pagina",JSON.stringify({id:articulo.id,imagen:articulo.imagen,nombre:articulo.nombre,precio:articulo.precio,descripcion:articulo.descripcion}))
            return; 
        }
        
    });
})
.catch((error) => console.error("No se pudo conseguir la data:", error))
}

function leerPagina() {
    let pagina=localStorage.getItem("pagina");
    return JSON.parse(pagina)
}


function agregarAlCarrito(id){
    fetch('./json/articulos.json').then((response) => response.json())
            .then((data) => {
                let articulos = data.articulos;
                let productos = leerProductos();
                if (productos==null) {
                articulos.find((articulo)=>{
                    
                    if (articulo.id==id) {
                        if (carrito.length===0 || carrito[carrito.length-1].id!=id) {   
                            carrito = [...carrito,{id:articulo.id,nombre:articulo.nombre,precio:articulo.precio,imagen:articulo.imagen}];
                            console.log(carrito);
                            productosEnCarrito(carrito)
                            mostrarProductos()
                            } 
                        }
                    })
                }else{
                    carrito=productos;
                    articulos.find((articulo)=>{
                    
                        if (articulo.id==id) {
                            if (carrito.some(producto=>producto.id==id)) {   
                                
                                } else{
                                    carrito = [...carrito,{id:articulo.id,nombre:articulo.nombre,precio:articulo.precio,imagen:articulo.imagen}];
                                    console.log(carrito);
                                    productosEnCarrito(carrito)
                                    mostrarProductos()
                                }
                       
                            }
    
                        })
                }
                
}).catch((error) => console.error("No se pudo conseguir la data:", error))
}