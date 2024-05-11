

let categorias = ["reciente","aviones","tarjetas"]


categorias.forEach(categoria => {
    document.body.innerHTML +=`
    <div id="carouselExample-${categoria}" class="carousel">
        <div id="carousel-productos-${categoria}-inner" class="carousel-inner carousel-productos-inner">
          <div class="carousel-item carousel-productos-item active">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">1</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">2</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">3</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">4</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">5</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">6</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">7</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">8</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">9</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div class="carousel-item carousel-productos-item">
            <div class="card">
  <img src="../media/background.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">10</h5>
    <p class="card-text">Some quick example text to build on the 1 and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
        </div>
        <button id="carousel-productos-${categoria}-control-prev" class="carousel-control-prev carousel-productos-control-prev" type="button" data-bs-target="#carouselExample-${categoria}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button id="carousel-productos-${categoria}-control-next" class="carousel-control-next carousel-productos-control-next" type="button" data-bs-target="#carouselExample-${categoria}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;


    const carouselProductos = document.querySelector(`#carouselExample-${categoria}`);

let carouselWidth = $('.carousel-productos-inner')[0].scrollWidth;
let articleWidth = $('.carousel-productos-item').width();
let scrollPosition = 0

if (window.matchMedia("(min-width:768px)").matches) {

    const carousel = new bootstrap.Carousel(carouselProductos, {
        interval: false
      });

    $(`#carouselExample-${categoria} #carousel-productos-${categoria}-control-prev`).hide();

    // Siguiente
    $(`#carousel-productos-${categoria}-control-next`).on('click', function () {
        console.log("Ejecutando la funcion");
        if (scrollPosition < (carouselWidth - (articleWidth * 5))) {
            console.log("Siguiente");
            scrollPosition = scrollPosition + articleWidth;
            $(`#carousel-productos-${categoria}-inner`).animate({scrollLeft: scrollPosition},
                300);
                if (scrollPosition > 0) {
                    $(`#carouselExample-${categoria} #carousel-productos-${categoria}-control-prev`).show();
                }
                if (scrollPosition > (carouselWidth - (articleWidth * 5))) {
                    $(`#carouselExample-${categoria} #carousel-productos-${categoria}-control-next`).hide();
                }
        }
    })
    // Anterior
    $(`#carousel-productos-${categoria}-control-prev`).on('click', function () {
        console.log("Ejecutando la funcion");
        if (scrollPosition > 0) {
            console.log("Anterior");
            scrollPosition = scrollPosition - articleWidth;
            $(`#carousel-productos-${categoria}-inner`).animate({scrollLeft: scrollPosition},
                300);
            if (scrollPosition <= 0) {
                $(`#carouselExample-${categoria} #carousel-productos-${categoria}-control-prev`).hide();
            }
            if (scrollPosition < (carouselWidth - (articleWidth * 5))) {
                $(`#carouselExample-${categoria} #carousel-productos-${categoria}-control-next`).show();
            }
        }
    })
} else {
    $(carouselProductos).addClass('slide');
    const carousel = new bootstrap.Carousel(carouselProductos, {
        wrap: false
      });
}


console.log(carouselProductos);
})




