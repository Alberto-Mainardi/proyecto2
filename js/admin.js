let articulos = [];
let categorias = [];
let productosAdmin = document.querySelector("#productosAdmin");
let categoriasAdmin = document.querySelector("#categoriasAdmin")
let mainAdmin = document.querySelector(".mainAdmin")

function leerUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    return usuarios;
}

function crearUsuarios(data) {
    localStorage.setItem("usuarios",JSON.stringify(data));
    mostrarUsuarios();
}
function modificarUsuarios(id, nuevosDatos) {
    let usuarios = leerUsuarios();
    let nuevosUsuarios = usuarios.filter((usuario) => {
        if(usuario.id == id){
            let obj ={id,email:nuevosDatos.email, password:nuevosDatos.password}
            return obj
        } else {
            return usuario
        }
    })
    console.log(nuevosDatos);
    console.log(nuevosUsuarios);
    crearUsuarios(nuevosUsuarios);
}
function eliminarUsuario(id) {
    let usuarios = leerUsuarios();
    let nuevosUsuarios = usuarios.filter((usuario) => {
        if(usuario.id != id){
            return usuario
        }
    })
    console.log(nuevosUsuarios);
    crearUsuarios(nuevosUsuarios);
    location.reload();
}

function mostrarUsuarios() {
    let usuarios = leerUsuarios();
    console.log(usuarios);
}

mostrarUsuarios();
function formModificarUsuario(id) {
    let usuarios = leerUsuarios();
    let usuario = usuarios.filter((user) => {
        if (user.id == id) {
            return user
        }
    })
}
function procesarForm(id) {
    let formId = Number(document.querySelector("input[id=id]").value);
    let password = document.querySelector("input[id=password]").value;
    let email = document.querySelector("input[id=email]").value;
    let username = document.querySelector("input[id=username]").value;
    console.log(email, password, username, formId);
    modificarUsuarios(formId, {email, username, password})
}


fetch('../json/articulos.json').then((response) => response.json())
.then((data) => {
   let categoriasJson =data.categorias; 
   let articulosJson = data.articulos;
   let usuariosJson = data.usuarios;
   let productos = leerProductosAdmin();
   let categoriasLS = leerCategoriasAdmin();
   let usuariosLS = leerUsuarios();
   let usuario = leerUsuario();
   
    if (usuariosLS==null || usuariosLS.length==0) {
        usuariosJson.forEach(usuario => {
            users.push(usuario);
        })
        
        crearUsuarios(users);
    }

   if (categoriasLS==null) {
    categoriasJson.forEach(categoria => {
        categorias.push(categoria);
       
    })
    
    categoriasEnAdmin(categorias);
    
    }

    if (productos==null) {
       
        articulosJson.forEach(articulo => {
            articulos.push(articulo);
        })
        console.log(articulos);
        productosEnAdmin(articulos);
        if (usuario.tipoDeCuenta=="vendedor") {
            console.log(usuario.tipoDeCuenta);
            formAgregarProductos();
        }else if(usuario.tipoDeCuenta=="admin"){
            mostrarProductosAdmin();
            mostrarCategoriasAdmin();
            mostrarUsuariosAdmin();
        }
        
    }else{
        if (usuario.tipoDeCuenta=="vendedor") {
            console.log(usuario.tipoDeCuenta);
            formAgregarProductos();
        }else if(usuario.tipoDeCuenta=="admin"){
            mostrarProductosAdmin();
            mostrarCategoriasAdmin();
            mostrarUsuariosAdmin();

        }

       
    }
    

    })

.catch((error) => console.error("No se pudo conseguir la data:", error))

function mostrarUsuariosAdmin(){
    let usuarios = leerUsuarios();
    console.log(usuarios);
    usuarios.forEach(usuario => {
            if (usuario.tipoDeCuenta!="admin") {
                usuariosAdmin.innerHTML += `
            
                <tr class="border border-2 border-white ">
                    <td class="border border-2 border-white p-0 p-md-3">${usuario.id}</td>
                    <td class="border border-2 border-white p-0 p-md-3">${usuario.username}</td>
                    <td class="border border-2 border-white p-0 p-md-3">${usuario.email}</td>
                    <td class="border border-2 border-white p-0 p-md-3">${usuario.tipoDeCuenta}</td>
                    <td class="border border-2 border-white p-0 p-md-3 d-none d-md-table-cell"><button class="btn botonCompra" onclick="eliminarUsuario(${usuario.id})">Eliminar</button></td>
                

                </tr>
                    `;
            }      
            
        })
   return;
}

