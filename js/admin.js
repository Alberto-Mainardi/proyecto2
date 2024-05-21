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