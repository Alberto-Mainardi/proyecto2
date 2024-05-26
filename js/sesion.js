// Registro
let estaActivo;
let esAdmin;
let esVendedor;
let mensajeSesionExitosa = document.querySelector("#mensajeSesionExitosa");
if (JSON.parse(sessionStorage.getItem("usuario")) != null) {
    estaActivo = true
}
if (JSON.parse(localStorage.getItem("usuario")) != null) {
    sessionStorage.setItem("usuario", localStorage.getItem("usuario"))
}

let users= leerUsuarios() || [];

function actualizarParametros() {
    console.log(contenidoPaginaSesion.classList);
    console.log(contenidoPaginaSesion.innerHTML);
    if (contenidoPaginaSesion.classList.contains("contenidoRegistroPaginaSesion")) {
        let formRegistro = document.querySelector("#formularioRegistro");
        let inputEmailRegistro = document.querySelector("input[id=emailRegistro]");
        let inputUsernameRegistro = document.querySelector("input[id=usernameRegistro]");
        let inputPasswordRegistro = document.querySelector("input[id=passwordRegistro]");
        let mostrarRequisitosPassword = document.querySelector(".mostrarRequisitosPassword");
        let inputConfirmarPasswordRegistro = document.querySelector("input[id=confirmarPasswordRegistro]");
        let inputTipoDeCuentaRegistro = document.querySelector("#tipoDeCuentaRegistro");


        inputEmailRegistro.addEventListener("focusout", () => {
            validarEmail();
            actualizarVistaPrevia();
        } );
        inputUsernameRegistro.addEventListener("focusout", () => {
            validarUsuario();
            actualizarVistaPrevia();
        });
        inputPasswordRegistro.addEventListener("focus", function () {
        mostrarRequisitosPassword.classList.remove("d-none");
        })
        inputPasswordRegistro.addEventListener("keyup", validarContraseña)
        inputTipoDeCuentaRegistro.addEventListener("focusout", actualizarVistaPrevia)

        formRegistro.addEventListener("submit", function (e) {
            e.preventDefault();
            passwordValida = validarContraseña();
            emailValido = validarEmail();
            usernameValido = validarUsuario();
            console.log(passwordValida, emailValido, usernameValido);

            if (passwordValida && emailValido && usernameValido) {
                let email = inputEmailRegistro.value;
                let username = inputUsernameRegistro.value
                let password = document.querySelector("input[id=passwordRegistro]").value;
                let tipoDeCuenta = document.querySelector("#tipoDeCuentaRegistro").value;
                users=[...users, ({id:Date.now(), email, username, password, tipoDeCuenta})];
                console.log(users);
                inputEmailRegistro.value= ``;
                document.querySelector("input[id=passwordRegistro]").value = ``;
                inputUsernameRegistro.value = ``;
                inputConfirmarPasswordRegistro.value = ``;
                crearUsuarios(users);
                iniciarSesion(users[users.length - 1], "Cuenta Creada Exitosamente");
            } else if (!emailValido) {
                inputEmailRegistro.focus();
            } else if (!usernameValido) {
                inputUsernameRegistro.focus();
            } else if (!passwordValida) {
                inputPasswordRegistro.focus();
                inputConfirmarPasswordRegistro.value = ``;
            }

        });
        
        let formFotoPerfil = document.querySelector("#formFotoPerfil");
        let inputFotoPerfil = document.querySelector("input[id=fotoPerfil]")
        let rutaFotoPerfil;
        formFotoPerfil.addEventListener("submit", function (e) {
            e.preventDefault()
            rutaFotoPerfil = inputFotoPerfil.value;
            localStorage.setItem("rutaFotoPerfil",JSON.stringify(rutaFotoPerfil))
            inputFotoPerfil.value = ``;
            actualizarVistaPrevia()
        })
    }

    // Login
    if (contenidoPaginaSesion.classList.contains("contenidoLoginPaginaSesion")) {
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
            iniciarSesion(user, "Sesión Iniciada Exitosamente")
            inputUsernameLogin.value = ``;
            document.querySelector("input[id=passwordLogin]").value = ``
        }
    })
})
    }
}
function mostrarModalFotoPerfil() {
    let modalFotoPerfil = document.querySelector("#modalFotoPerfil");
    modalFotoPerfil.classList.toggle("ocultarModalFotoPerfil");
}

function actualizarVistaPrevia() {
    let inputEmailRegistro = document.querySelector("input[id=emailRegistro]");
    let emailPreview;
    if (inputEmailRegistro.value != '') {
        emailPreview = inputEmailRegistro.value;
    } else {
        emailPreview = "(Correo)"
    }

    let inputUsernameRegistro = document.querySelector("input[id=usernameRegistro]");
    let usernamePreview;
    if (inputUsernameRegistro.value != '') {
        usernamePreview = inputUsernameRegistro.value;
    } else {
        usernamePreview = "(usuario)";
    }

    let inputTipoDeCuenta = document.querySelector("#tipoDeCuentaRegistro");
    let tipoDeCuentaPreview;
    if (inputTipoDeCuenta.value != '') {
        tipoDeCuentaPreview = inputTipoDeCuenta.value;
    } else {
        tipoDeCuentaPreview = "(Tipo de usuario)"
    }

    let rutaFotoPerfil;
    if (JSON.parse(localStorage.getItem("rutaFotoPerfil")) != null) {
        rutaFotoPerfil = JSON.parse(localStorage.getItem("rutaFotoPerfil"));
    } else {
        rutaFotoPerfil = "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
    }

    let vistaPreviaRegistro = document.querySelector("#vistaPreviaRegistro");
    vistaPreviaRegistro.innerHTML = `
    <h3 class="secondary-color">Vista Previa</h3>
    <div class="d-flex mt-4">
        <div class="m-3 w-50" style="position:relative;">
            <div id="botonCambiarFotoPerfil" onclick="mostrarModalFotoPerfil()" class="w-100">
                <div class="d-flex text-center align-items-center h-100">
                    <div>
                        <svg class="w-100" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg>
                        <p class="w-100 text-white">Añadir foto de perfil</p>
                    </div>
      
                </div>
            </div>
            <div id="previewFotoPerfil" class="fotoPerfil">
            <img src="${rutaFotoPerfil}" alt="fotoDePerfil" class="fotoPerfil w-100">

            </div>
        </div>
    <div class="m-3 w-50 text-start">
        <h4 class="text-white pt-4">${usernamePreview}</h4>
        <h5 class="text-white fs-6">${tipoDeCuentaPreview}</h5>
    </div>
</div>
<div class="text-start mt-3 bg-dark p-2 rounded rounded-3">
<p class="text-white m-1">Correo electrónico: <span>${emailPreview}</span></p>
<p class="text-white m-1">Nombre de usuario: <span>${usernamePreview}</span></p>
<p class="text-white m-1">Tipo de usuario: <span>${tipoDeCuentaPreview}</span></p>
</div>
    `;
}


function validarEmail() {
    let inputEmailRegistro = document.querySelector("input[id=emailRegistro]");
    let email = inputEmailRegistro.value;
    let emailYaExistente = document.querySelector("#emailExiste");
    let emailValido = true;
    emailYaExistente.innerHTML = ``
    users.forEach(user => {
        if (user.email == email) {
            emailYaExistente.innerHTML = `
            <p class="text-danger">La dirección de correo ingresada ya existe.</p>
            `;
            emailValido = false
        }
    })
    if (emailValido) {
        return true
    }
    return false
}

function validarUsuario() {
    let inputUsernameRegistro = document.querySelector("input[id=usernameRegistro]");
    let username = inputUsernameRegistro.value;
    let usuarioYaExistente = document.querySelector("#usuarioExiste");
    let usernameValido = true;
    usuarioYaExistente.innerHTML = ``;
    users.forEach(user => {
        if (user.username == username) {
            usuarioYaExistente.innerHTML = `
            <p class="text-danger">Ese usuario ya existe.</p>
            `;
            usernameValido = false
        }
    })
    if (usernameValido) {
        actualizarVistaPrevia()
        return true
    }
    return false
}

function validarContraseña() {
    let inputPasswordRegistro = document.querySelector("input[id=passwordRegistro]");
    let requisitoPasswordLength = document.querySelector("#requisitoPasswordLength");
    let requisitoPasswordMayusculasMinusculas = document.querySelector("#requisitoPasswordMayusculasMinusculas");
    let requisitoPasswordNumero = document.querySelector("#requisitoPasswordNumero");
    let requisitoPasswordCaracterEspecial = document.querySelector("#requisitoPasswordCaracterEspecial");
    let mostrarRequisitosPassword = document.querySelector(".mostrarRequisitosPassword");
    let inputConfirmarPasswordRegistro = document.querySelector("input[id=confirmarPasswordRegistro]");

    let confirmarPasswordRegistroMensaje = document.querySelector("#confirmarPasswordRegistroMensaje");
    confirmarPasswordRegistroMensaje.innerHTML = ``;

    let passwordInputValida
    let passwordValida;

        console.log(inputPasswordRegistro.value);
        if (inputPasswordRegistro.value.length >= 6) {
            requisitoPasswordLength.classList.add("requisitoPasswordCumplido");
        } else {
            requisitoPasswordLength.classList.remove("requisitoPasswordCumplido");
        }
        if (inputPasswordRegistro.value.match(/[A-Z]/g) && inputPasswordRegistro.value.match(/[a-z]/g)) {
            requisitoPasswordMayusculasMinusculas.classList.add("requisitoPasswordCumplido");
        } else {
            requisitoPasswordMayusculasMinusculas.classList.remove("requisitoPasswordCumplido");
        }
        if (inputPasswordRegistro.value.match(/[0-9]/g)) {
            requisitoPasswordNumero.classList.add("requisitoPasswordCumplido");
        } else {
            requisitoPasswordNumero.classList.remove("requisitoPasswordCumplido");
        }
        if (inputPasswordRegistro.value.match(/[.@$!%*#?&><^-_]/)) {
            requisitoPasswordCaracterEspecial.classList.add("requisitoPasswordCumplido");
        } else {
            requisitoPasswordCaracterEspecial.classList.remove("requisitoPasswordCumplido");
        }

        if (requisitoPasswordLength.classList.contains("requisitoPasswordCumplido")
            && requisitoPasswordMayusculasMinusculas.classList.contains("requisitoPasswordCumplido")
            && requisitoPasswordNumero.classList.contains("requisitoPasswordCumplido")
            && requisitoPasswordCaracterEspecial.classList.contains("requisitoPasswordCumplido")) {
                passwordInputValida = true;
                console.log(passwordInputValida);
        } else {
            passwordInputValida = false;
        }

        inputPasswordRegistro.addEventListener("focusout", function () {
            if (passwordInputValida) {
                mostrarRequisitosPassword.classList.add("d-none");
            } 
        })


        inputConfirmarPasswordRegistro.addEventListener("focusout", function (){
            if (inputConfirmarPasswordRegistro.value == inputPasswordRegistro.value && passwordInputValida) {
                passwordValida = true;
            } else if (inputConfirmarPasswordRegistro.value != inputPasswordRegistro.value) {
                confirmarPasswordRegistroMensaje.innerHTML =
                `<p class="text-danger">Las contraseñas no coinciden.</p>
                `;
            }
        })

        if (inputConfirmarPasswordRegistro.value == inputPasswordRegistro.value && passwordInputValida) {
            passwordValida = true;
        }

        if (passwordValida) {
            return true
        } else {
            return false
        }
    }

// Inicio de Sesión
function iniciarSesion(user, mensaje) {
    sessionStorage.setItem("usuario", JSON.stringify(user));
    estaActivo = true;
    contenidoPaginaSesion.innerHTML = ``;
    mensajeSesionExitosa.innerHTML = `
    <div class="bg-dark d-flex align-items-center justify-content-center" style="position:absolute; top:0; height: 100vh; width: 100vw; z-index: 1000;">
    <div class="text-center">
        <h2 class="sesionExitosoPrincipal secondary-color" style="width: 100%;">${mensaje}</h2>
        <p class="sesionExitosoSecundario text-secondary" style="width: 100%;">Te vamos a redireccionar a la página principal en <br>
        <span id="contadorRedireccionar">3</span>
        </p>
    </div>        
    </div>
    `;
    let contadorRedireccionar = document.querySelector("#contadorRedireccionar");
    contadorRedireccionar.value = 3;
    setInterval(() => {
        contadorRedireccionar.value --
        console.log(contadorRedireccionar);
        if (contadorRedireccionar.value > 0) {
            mensajeSesionExitosa.innerHTML = `
            <div class="bg-dark d-flex align-items-center justify-content-center" style="position:absolute; top:0; height: 100vh; width: 100vw; z-index: 1000;">
            <div class="text-center">
                <h2 class="sesionExitosoPrincipal secondary-color" style="width: 100%;">${mensaje}</h2>
                <p class="sesionExitosoSecundario text-secondary" style="width: 100%;">Te vamos a redireccionar a la página principal en <br>
                <span id="contadorRedireccionar">${contadorRedireccionar.value}</span>
                </p>
            </div>        
            </div>
            `;
        } else {
            window.location.href = "../index.html"
        }
    }, 1000)

}
console.log(estaActivo);