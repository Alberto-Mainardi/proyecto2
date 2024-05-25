
function productosEnAdmin(data) {
    console.log(data);
        window.localStorage.setItem("productos",JSON.stringify(data))
        return; 
}

function leerProductosAdmin() {
    let productos=localStorage.getItem("productos");
    return JSON.parse(productos)
    
}

function categoriasEnAdmin(data) {
    console.log(data);
        window.localStorage.setItem("categorias",JSON.stringify(data))
        return; 
}

function leerCategoriasAdmin() {
    let categorias=localStorage.getItem("categorias");
    return JSON.parse(categorias)
    
}

function mostrarProductosAdmin(){
    let articulos = leerProductosAdmin()
    articulos.forEach(articulo => {
            productosAdmin.innerHTML += `
            <article id="${articulo.id}" onclick="paginaProducto(${articulo.id})" style="width: 85%; max-width: 300px; height:350px;" class="p-0 mx-4 p-sm-4 m-md-2 col-lg-2 productoBusqueda producto">
            <a class="text-decoration-none text-white" href="./paginaProducto.html">
                <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
                <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
                </div>
                <h5 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h5>
            </a>
            <div class="d-flex flex-column flex-sm-row justify-content-between my-4 text-white align-items-center">
                <button class="btn botonCompra" onclick="formModificarProducto(${articulo.id})">Modificar</button>
                <button onclick="eliminarProductoAdmin(${articulo.id})" class="btn botonCompra">Eliminar</button>
                
            </div>
         </article> 
                `;
            
        })
   return;
}

function formAgregarProductos() {
    window.scrollTo(0,0)

    let categorias = leerCategoriasAdmin();

    mainAdmin.innerHTML = `
    <form onsubmit="event.preventDefault();agregarProducto()">
        <label class="text-white pb-2 d-block" for="nombreProducto">Nombre</label>
        <input class="border-success w-75 mb-2" type="text" id="nombreProducto" required>
    
        <label class="text-white pb-2 pt-2 d-block" for="descripcionProducto">Descripcion</label>
        <input class="border-success w-75 mb-2" type="text" id="descripcionProducto" required>

        <label class="text-white pb-2 pt-2 d-block" for="precioProducto">Precio</label>
        <input class="border-success w-25 mb-2" type="number" id="precioProducto" required>
        
        <label class="text-white pb-2 pt-2 d-block" for="cantidad">Cantidad</label>
        <input class="border-success mb-2" type="number" id="cantidad" required>
        
        <label class="text-white pb-2 pt-2 d-block" for="imagenProducto">Imagen (colocar la url de la imagen que desea mostrar)</label>
        <input class="border-success w-75 mb-2" type="text" id="imagenProducto" required>

        <label class="text-white pb-2 pt-2 d-block" for="palabrasClave">Palabras Clave (colocar las palabras clave separadas por comas. Por ejemplo: Nvidia,Amd,Raton,etc )</label>
        <input class="border-success w-75 mb-2" type="text" id="palabrasClave">

        <div id="divCategorias" required>
            <label class="text-white pt-2 d-block " for="palabrasClave">Categorias</label>
        </div>
        <p id="advertencia" style="color: red; margin:0px"></p>

        <button type="submit" id="botonAgregarProducto" class="btn btn-block botonCompra"><span class="glyphicon glyphicon-off"></span>Agregar Producto</button>

        </form>
    `;

    let divCategorias = document.querySelector("#divCategorias")
    categorias.forEach(categoria => {
        divCategorias.innerHTML+=`
        <input class="border-success" type="checkbox" id="categoria${categoria.id}" name="categoria" value="${categoria.nombre}">
        <label class="text-white pb-2 pt-2" for="categoria${categoria.id}">${categoria.nombre}</label>
        `
    });
}

function agregarProducto() {
    let advertencia = document.querySelector("#advertencia")
    let nombre = document.querySelector("input[id=nombreProducto]").value;
    let precio = document.querySelector("input[id=precioProducto]").value;
    let descripcion = document.querySelector("input[id=descripcionProducto]").value;
    let cantidad = document.querySelector("input[id=cantidad]").value;
    let imagen = document.querySelector("input[id=imagenProducto]").value;
    let categoriasStr = document.querySelectorAll("input[name=categoria]:checked");
    let palabras = document.querySelector("input[id=palabrasClave]").value;
    let palabrasClave = palabras.split(',');
    let categorias=[];

    categoriasStr.forEach(categoria => {
        
        categorias.push(categoria.value)
    });

    if (categoriasStr.length==0) {
        advertencia.innerText=`Debe seleccionar por lo menos una categoria`
    }else{
        articulos=leerProductosAdmin();
        let id = Number(articulos[articulos.length - 1].id) + 1
        articulos = [...articulos,{id,nombre,precio,descripcion,cantidad,imagen,categorias,palabrasClave}]
        console.log(articulos);
        productosEnAdmin(articulos);
        location.reload();
    }
    
}

function formModificarProducto(id) {
    window.scrollTo(0,0); 

    let categorias = leerCategoriasAdmin();

    mainAdmin.innerHTML = `
    <form onsubmit="event.preventDefault();modificarProductos(${id})">
        <label class="text-white pb-2 d-block" for="nombreProducto">Nombre</label>
        <input class="border-success w-75 mb-2" type="text" id="nombreProducto" required>

        <label class="text-white pb-2 pt-2 d-block" for="descripcionProducto">Descripcion</label>
        <input class="border-success w-75 mb-2" type="text" id="descripcionProducto" required>

        <label class="text-white pb-2 pt-2 d-block" for="precioProducto">Precio</label>
        <input class="border-success w-25 mb-2" type="number" id="precioProducto" required>
        
        <label class="text-white pb-2 pt-2 d-block" for="cantidad">Cantidad</label>
        <input class="border-success mb-2" type="number" id="cantidad" required>
        
        <label class="text-white pb-2 pt-2 d-block" for="imagenProducto">Imagen (colocar la url de la imagen que desea mostrar)</label>
        <input class="border-success w-75 mb-2" type="text" id="imagenProducto" required>

        <label class="text-white pb-2 pt-2 d-block" for="palabrasClave">Palabras Clave (colocar las palabras clave separadas por comas. Por ejemplo: Nvidia,Amd,Raton,etc)</label>
        <input class="border-success w-75 mb-2" type="text" id="palabrasClave">

        <div id="divCategorias" required>
            <label class="text-white pt-2 d-block " for="palabrasClave">Categorias</label>
        </div>
        <p id="advertencia" style="color: red; margin:0px"></p>
    
   
        <button id="botonModificarProducto" class="btn btn-block botonCompra"><span class="glyphicon glyphicon-off"></span>Modificar Producto</button>
    </form>
 
    `;

    let divCategorias = document.querySelector("#divCategorias")
    categorias.forEach(categoria => {
        divCategorias.innerHTML+=`
        <input class="border-success" type="checkbox" id="categoria${categoria.id}" name="categoria" value="${categoria.nombre}">
        <label class="text-white pb-2 pt-2" for="categoria${categoria.id}">${categoria.nombre}</label>
        `
    });
}

function modificarProductos(id) {
    
    let nombre = document.querySelector("input[id=nombreProducto]").value;
    console.log(nombre);
    let precio = document.querySelector("input[id=precioProducto]").value;
    let descripcion = document.querySelector("input[id=descripcionProducto]").value;
    let cantidad = document.querySelector("input[id=cantidad]").value;
    let imagen = document.querySelector("input[id=imagenProducto]").value;
    let categoriasStr = document.querySelectorAll("input[name=categoria]:checked");
    let palabras = document.querySelector("input[id=palabrasClave]").value;
    let palabrasClave = palabras.split(',');
    let categorias=[];

    categoriasStr.forEach(categoria => {
        
        categorias.push(categoria.value)
    });
    let articulos = leerProductosAdmin();
    console.log(articulos);


    if (categoriasStr.length==0) {
        advertencia.innerText=`Debe seleccionar por lo menos una categoria`
    }else{
        let nuevosProductos = articulos.map((articulo) => {
            console.log(articulo.id);
            if(articulo.id == id){
                console.log(id);
                let obj ={id,nombre, precio, descripcion,cantidad, imagen,categorias,palabrasClave}
                console.log(obj);
                return obj
            } else {
                return articulo
            }
        })
         
        console.log(nuevosProductos);
        productosEnAdmin(nuevosProductos);
        location.reload();
    }

   
}

function mostrarCategoriasAdmin(){
    let categorias = leerCategoriasAdmin()
    categorias.forEach(categoria => {
     
            categoriasAdmin.innerHTML += `
            <tr class="border border-2 border-white">
                <td class="border border-2 border-white p-3">${categoria.id}</td>
                <td class="border border-2 border-white p-3">${categoria.nombre}</td>
               

            </tr>
                `;
            
        })
   return;
}

function formAgregarCategorias() {
    window.scrollTo(0,0);     
    mainAdmin.innerHTML = `
        <label class="text-white pb-2" for="nombreCategoria">Nombre</label>
        <input class="border-success " type="text" id="nombreCategoria" >

    
   
        <button id="botonAgregarCategoria" onclick="agregarCategoria()" class="btn btn-block botonCompra d-block"><span class="glyphicon glyphicon-off"></span>Agregar Categoria</button>

 
    `;
}



function agregarCategoria() {

    let categorias = leerCategoriasAdmin();
    let nombre = document.querySelector("input[id=nombreCategoria]").value;
    console.log(categorias[categorias.length - 1].id);
    let id = categorias[categorias.length - 1].id + 1
    categorias = [...categorias,{id,nombre}]
    console.log(categorias);
    categoriasEnAdmin(categorias);
    location.reload();
}


function eliminarProductoAdmin(id) {
    let productos = leerProductosAdmin();
    let nuevosProductos = productos.filter((producto) => {
        if(producto.id != id){
            return producto
        }
    })
    
    productosEnAdmin(nuevosProductos);
    location.reload();
}




