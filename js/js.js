var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");


flipPeliculas.forEach(function (elemento) {
    elemento.addEventListener('click', function cambiarCara () {
        if (elemento.classList.contains("animacionDefault")) {
          


        } else{
          
            elemento.classList.remove("animacionFlip");
            elemento.classList.add("animacionDefault");

            overlay.classList.add("overlayDefault");
            overlay.classList.remove("overlayFlip");

            contenidoFlipped.classList.remove("contenidoFlipBlock");
            contenidoFlipped.classList.add("contenidoFlip");

            contenidoDefault.classList.add("contenidoDefault");
            contenidoDefault.classList.remove("contenidoDefaultRemove");

            frontPelicula.classList.remove("peliculasInactive");
            frontPelicula.classList.add("peliculasActive");

            backPelicula.classList.remove("peliculasBackActive");
            backPelicula.classList.add("peliculasBackInactive");
        }
    });
});

mostrarFiltros.forEach(function (showFilter) {
    botonFiltrar.addEventListener('click', function () {
        if(showFilter.style.gridTemplateColumns = "4fr"){
            showFilter.style.gridTemplateColumns = "1fr 4fr";
        }
        else if(showFilter.style.gridTemplateColumns = "1fr 4fr"){
            showFilter.style.gridTemplateColumns = "4fr";
        }
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.getElementById('rating');
    const stars = ratingContainer.getElementsByClassName('star');
  
    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener('mouseover', function () {
        highlightStars(i);
      });
  
      ratingContainer.addEventListener('mouseleave', function () {
        resetStars();
      });
  
      stars[i].addEventListener('click', function () {
        setRating(i + 1);
      });
    }
  
    function highlightStars(index) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active');
      }
  
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function resetStars() {
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function setRating(rating) {
      resetStars();
  
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }
    }
  });
  