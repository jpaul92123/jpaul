document.addEventListener('DOMContentLoaded', function () {
    fetch('/data/categorias.json')
        .then(response => response.json())
        .then(data => {
            const carousel = document.getElementById('custom-carousel');

            data.forEach(item => {
                const productCard = document.createElement('div');
                productCard.className = 'card custom-carousel-item border-0';

                productCard.innerHTML = `
                    <div class="card-header custom-carousel-img position-relative overflow-hidden bg-tran
                    rent border p-0">
                        <img class="img-fluid w-100" src="${item.imagen}" alt="${item.nombre}">
                        <div class="custom-carousel-overlay">
                            <a href="${item.url}" class="btn btn-light">Visitar</a>
                        </div>
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">${item.nombre}</h6>
                    </div>
                `;

                carousel.appendChild(productCard);
            });

            // Inicializa el carrusel de Owl Carousel con autoplay
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                rtl: true, // Esto permite que el carrusel se desplace hacia la izquierda
                autoplay: true, // Activa el autoplay
                autoplayTimeout: 1500, // Cambia cada 3 segundos
                autoplayHoverPause: true, // Pausa el autoplay al pasar el mouse
                responsive: {
                    0: {
                        items: 2 // Muestra 2 elementos en pantallas pequeñas
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
