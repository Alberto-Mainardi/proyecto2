let recientes = document.querySelector("#recientes");



const formBusqueda = document.querySelector("#cajaBusqueda");
formBusqueda.addEventListener("submit", function (e) {
    e.preventDefault();
    let busqueda = formBusqueda.elements['entradaBusqueda'].value.toLowerCase();
    localStorage.setItem("busqueda",busqueda);
    window.location.href="../pages/busqueda.html"
})