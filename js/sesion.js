let estaActivo;
if (JSON.parse(sessionStorage.getItem("usuario")) != null) {
    estaActivo = true
}
if (JSON.parse(localStorage.getItem("usuario")) != null) {
    sessionStorage.setItem("usuario", localStorage.getItem("usuario"))
}
// Registro

let users= leerUsuarios() || [];
function actualizarParametros() {
formRegistro = document.querySelector("#formularioRegistro");
inputEmailRegistro = document.querySelector("input[id=emailRegistro]");
inputUsernameRegistro = document.querySelector("input[id=usernameRegistro]")
emailYaExistente = document.querySelector("#emailExiste");
usuarioYaExistente = document.querySelector("#usuarioExiste");
inputEmailRegistro.addEventListener("focusout", validarEmail);
formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = inputEmailRegistro.value;
    let username = inputUsernameRegistro.value
    let password = document.querySelector("input[id=passwordRegistro]").value;
    users=[...users, ({id:Date.now(), email, username, password})];
    inputEmailRegistro.value= ``;
    document.querySelector("input[id=passwordRegistro]").value = ``;
    inputUsernameRegistro.value = ``;
    crearUsuarios(users);
    iniciarSesion(users[users.length - 1]);
    validarEmail();
})
}
let formRegistro = document.querySelector("#formularioRegistro");
let inputEmailRegistro = document.querySelector("input[id=emailRegistro]");
let inputUsernameRegistro = document.querySelector("input[id=usernameRegistro]")
let emailYaExistente = document.querySelector("#emailExiste");
let usuarioYaExistente = document.querySelector("#usuarioExiste");
inputEmailRegistro.addEventListener("focusout", validarEmail);
formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = inputEmailRegistro.value;
    let username = inputUsernameRegistro.value
    let password = document.querySelector("input[id=passwordRegistro]").value;
    users=[...users, ({id:Date.now(), email, username, password})];
    inputEmailRegistro.value= ``;
    document.querySelector("input[id=passwordRegistro]").value = ``;
    inputUsernameRegistro.value = ``;
    crearUsuarios(users);
    iniciarSesion(users[users.length - 1]);
})
function validarEmail() {
    let email = inputEmailRegistro.value;
    users.forEach(user => {
        if (user.email == email) {
            emailYaExistente.innerHTML = `
            <p class="text-danger">La dirección de correo ingresada ya existe.</p>
            `;
            setTimeout(() => {
                emailYaExistente.innerHTML = ``;
                inputEmailRegistro.value = ``;
            }, 2000);
        }
    })
    
}


// Inicio de Sesión

let formLogin = document.querySelector("#formularioLogin");
let inputUsernameLogin = document.querySelector("input[id=usernameLogin]");
let mensajeUsuarioIncorrecto = document.querySelector("#usuarioIncorrecto");
let mensajeContraseñaIncorrecta = document.querySelector("#contraseñaIncorrecta");
let recordarme = document.querySelector("input[id=recordarme]");
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    let usuario = inputUsernameLogin.value
    let password = document.querySelector("input[id=passwordLogin]").value
    users.forEach(user => {
        mensajeUsuarioIncorrecto.innerHTML = ``;
        if (usuario != user.email && usuario != user.username) {
            mensajeUsuarioIncorrecto.innerHTML = `
            <p class="text-danger">Usuario o dirección de correo incorrecto.</p>
            `;
        } else if (password != user.password) {
            mensajeContraseñaIncorrecta.innerHTML = `
            <p class="text-danger">Contraseña incorrecta.</p>
            `;
        } else {
            if (recordarme.checked) {
                localStorage.setItem("usuario", JSON.stringify(user));
            }
            iniciarSesion(user)
            inputUsernameLogin.value = ``;
            document.querySelector("input[id=passwordLogin]").value = ``
        }
    })
})
function iniciarSesion(user) {
    sessionStorage.setItem("usuario", JSON.stringify(user));
    console.log("Iniciaste Sesión");
    estaActivo = true
}
console.log(estaActivo);