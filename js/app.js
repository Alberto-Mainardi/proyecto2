let carrito=[]
let favoritos=[]
let recientes = document.querySelector("#recientes");
let header = document.querySelector("header");
let footer = document.querySelector("footer")

header.innerHTML=`
<nav class="navbar navbar-expand-lg fixed-top">
<div id="contenedorFlexibleNavbar" class="container d-flex">
  <a id="textoLogo" class="navbar-brand fs-3" href="#">
    <img id="logoMenu" src="./media/logo.png" alt="logo" />
    Tecnobyte
  </a>
  <button id="botonMenu" class="navbar-toggler shadow-none border-2" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="barraLateral offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header text-white border-bottom">
      <h4 class="offcanvas-title" id="offcanvasNavbarLabel">
        TecnoByte
      </h4>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
    </div>
    <div id="fueraDeArea" class="offcanvas-body p-4">
      <ul class="navbar-nav fs-5 align-items-center justify-content-around flex-grow-1">
        <li class="nav-item mx-2">
          <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Destacados</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Favoritos <span id="contador-favoritos">0</span></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="./contactos.html">Contacto</a>
        </li>
        <li class="nav-item mx-2 d-lg-none w-100 d-flex justify-content-around">
          <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
              fill="#44d62c" class="bi bi-facebook" viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></a>
          <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
              fill="#44d62c" class="bi bi-instagram" viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg></a>
          <a href="https://twitter.com/?lang=en"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
              fill="#44d62c" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg></a>
          <a href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
              fill="#44d62c" class="bi bi-youtube" viewBox="0 0 16 16">
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg></a>
        </li>
        <li class="nav-item mx-2 text-decoration-none list-unstyled order-first">
          <div id="cajaBusqueda">
            <input id="entradaBusqueda" type="text" class="form-control" placeholder="Buscar" />
            <span id="logobusqueda">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-search" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-around p-4">
        <div class="d-flex justify-content-center align-items-center gap-3 pe-3">
          <a id="botonIngresar" href="#ingresar" class="px-3 py-1 rounded-1 text-decoration-none d-flex"><svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>Ingresar</a>
        </div>
        <div class="d-flex justify-content-center align-items-center pe-3">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
            class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
          </svg><span id="cuenta-carrito">0</span></a>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <a id="logoAyuda" href="./error404.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-info-square" viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>
`
footer.innerHTML=`
            <div class="row d-flex align-items-center m-lg-3">
                <div class="col-lg-3 col-md-12 text-center d-flex flex-column align-items-center mt-4">
                    <img id="logo-footer" src="./media/logo.png" alt="logo" />
                    <h2 class="pb-2 mt-3 secondary-color">TecnoByte</h2>
                </div>
                <div class="col-lg-2 col-md-6 d-flex flex-column objetosFooter">
                    <h4 id="categoriasFooter" class="pb-2">Categorías</h4>
                    <ul class="list-unstyled">
                        <li class="pb-2">
                        <a class="footerLink" href="#procesadores">Procesadores</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="#tarjetasGraficas">Tarjetas Graficas</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="#almacenamiento">Almacenamiento</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="#memoriaRam">Memoria Ram</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="#tarjetaMadre">Tarjeta Madre</a>
                        </li>
                        <li>
                        <a class="footerLink" href="#fuenteAlimentacion">Monitores</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 d-flex flex-column objetosFooter">
                    <h4 class="pb-2">Proveedores</h4>
                    <ul class="list-unstyled">
                        <li class="pb-2">
                        <a class="footerLink" href="https://www.amd.com/en.html">AMD</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="https://www.nvidia.com/en-us/">NVIDIA</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="https://www.asus.com/">ASUS</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="https://www.asus.com/">Intel</a>
                        </li>
                        <li class="pb-2">
                        <a class="footerLink" href="https://www.gigabyte.com/">GIGABYTE</a>
                        </li>
                        <li>
                        <a class="footerLink" href="https://www.msi.com/index.php">MSI</a>
                        </li>
                    </ul>
                    </div>
                    <div id="contactosFooter" class="col-lg-5 col-md-12 p-md-0 m-md-0">
                    <div id="redesFooter" class="d-lg-flex d-md-block flex-wrap ms-4">
                        <div>
                        <h4 id="textoRedes">Redes Sociales</h4>
                        <ul class="list-unstyled">
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-facebook secondary-color" viewBox="0 0 16 16">
                                <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg><a class="ms-2 footerLink" href="https://www.facebook.com/">Facebook</a>
                            </li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-twitter-x secondary-color" viewBox="0 0 16 16">
                                <path
                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg><a class="ms-2 footerLink" href="https://twitter.com/?lang=en">Twitter</a>
                            </li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-instagram secondary-color" viewBox="0 0 16 16">
                                <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg><a class="ms-2 footerLink" href="https://www.instagram.com/">Instagram</a>
                            </li>
                        </ul>
                        <h3>Contacto</h3>
                        <p>Teléfono: <span class="secondary-color">123-456-789</span></p>
                        <p>
                            Email: <span class="secondary-color">tecnoByte@gmail.com</span>
                        </p>
                        </div>
                        <div id="conenedorQr" class=" mt-lg-5 pt-lg-2 align-items-center ms-lg-5">
                        <img id="imgQr" class="img-fluid" src="./media/frame.png" alt="qr" />
                        </div>
                    </div>
                    </div>
                </div>
            <p class="text-center pt-4 mb-0 secondary-color">
            &copy; 2024 Todos los derechos reservados
            </p>
`

fetch('./json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    articulos.forEach(articulo => {
        recientes.innerHTML += `
        <article id="${articulo.id}" onclick="paginaProducto(${articulo.id})" style="max-width: 400px; background-color: white; border-radius: 1rem" class="p-3 m-2 border border-2 col-lg-2">
             <a href="./paginaProducto.html">
                <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
                <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
                </div>
                <h4 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h4>
            </a>
        <div class="d-flex justify-content-between my-4 flex-column">
            <h3>$${articulo.precio}</h3>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${articulo.id})">Comprar</button>
            <svg xmlns="http://www.w3.org/2000/svg" onclick="agregarFavoritos(${articulo.id})" class="favBoton" height="28px" viewBox="0 -960 960 960" width="28px" fill="black"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
        </div>
        <p class="text-justify"><strong>Descripción</strong> <br></p>
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

function agregarFavoritos(id){
    fetch('./json/articulos.json').then((response) => response.json())
            .then((data) => {
                let articulos = data.articulos;
                let productos = leerFavoritos();
                if (productos==null) {
                articulos.find((articulo)=>{
                    
                    if (articulo.id==id) {
                        if (favoritos.length===0 || favoritos[favoritos.length-1].id!=id) {   
                            favoritos = [...favoritos,{id:articulo.id,nombre:articulo.nombre,precio:articulo.precio,imagen:articulo.imagen}];
                            productosEnFavoritos(favoritos)
                            mostrarProductosFavoritos()
                            } 
                        }
                    })
                }else{
                    favoritos=productos;
                    articulos.find((articulo)=>{
                    
                        if (articulo.id==id) {
                            if (favoritos.some(producto=>producto.id==id)) {   
                                
                                } else{
                                    favoritos = [...favoritos,{id:articulo.id,nombre:articulo.nombre,precio:articulo.precio,imagen:articulo.imagen}];
                                    console.log(favoritos);
                                    productosEnFavoritos(favoritos)
                                    mostrarProductosFavoritos()
                                }
                       
                            }
    
                        })
                }
                
}).catch((error) => console.error("No se pudo conseguir la data:", error))
}


