let recientes = document.querySelector("#recientes");
let homeSlider = document.querySelector("#homeSlider");
fetch('../json/articulos.json').then((response) => response.json())
.then((data) => {
    let articulos = data.articulos;
    articulos.filter(articulo => {
        console.log(articulo.categorias);
        if (articulo.categorias.includes("recientes")) {
            


            recientes.innerHTML += `
            `;
            }
        })


        // const slider = document.querySelector(".sliderBox");
        // let scrollPerClick;
        // let ImagePadding = 20;
        // let peliculas = ["https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*","https://hips.hearstapps.com/hmg-prod/images/10-things-i-hate-about-you-228397540-large-1673866014.jpeg?crop=0.896xw:1.00xh;0.0493xw,0&resize=980:*"]
        // showMovieData();
        
        
//         async function showMovieData() {
        
//             let scrollAmount = 0;
        
//             function sliderScrollLeft() {
//                 slider.scrollTo({
//                     top: 0,
//                     left: (scrollAmount -= scrollPerClick),
//                     behavior: "smooth"
//                 });
        
//                 if (scrollAmount < 0) {
//                     scrollAmount = 0
//                 }
//             }
        
//             function sliderScrollRight() {
//                 if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
//                  slider.scrollTo({
//                     top: 0,
//                     left: (scrollAmount += scrollPerClick),
//                     behavior: "smooth"
//                  })  
//                 }
//             }
        
//             peliculas.forEach((pelicula, id) => {
//                 slider.innerHTML += `
//                 <article id="recientes-${articulo.id}" style="width: 85%; max-width: 300px; height:350px;" class="p-3 m-2 col-lg-2">
//             <div class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
//             <img class="w-75 h-100" src="${articulo.imagen}" alt="${articulo.alt} style="object-fit: cover;">
//             </div>
//             <h5 class="text-justify" style="text-overflow: ellipsis; white-space:nowrap; overflow: hidden;">${articulo.nombre}</h5>
//             <div class="d-flex justify-content-between my-4">
//                 <h4>$${articulo.precio}</h4>
//                 <button class="btn btn-compra">Comprar</button>
//             </div>
//         </article> 
//                 `;
//             })
//             scrollPerClick = document.querySelector("#recientes-1").clientWidth + ImagePadding
        
//             document.querySelector(".switchLeft").addEventListener("click",sliderScrollLeft)
//             document.querySelector(".switchRight").addEventListener("click",sliderScrollRight)
//         }

//     });
    })
.catch((error) => console.error("No se pudo conseguir la data:", error))


const formBusqueda = document.querySelector("#cajaBusqueda");
formBusqueda.addEventListener("submit", function (e) {
    e.preventDefault();
    let busqueda = formBusqueda.elements['entradaBusqueda'].value.toLowerCase();
    localStorage.setItem("busqueda",busqueda);
})