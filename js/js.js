var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
var flipOverlay = document.querySelectorAll(".overlay")
var contenidoFlipped = document.querySelectorAll(".contenidoFlip")
var contenidoDefault = document.querySelectorAll(".contenidoDefault")
var frontPeliculas = document.querySelectorAll(".peliculasActive");
var backPeliculas = document.querySelectorAll(".peliculasBackInactive");
var mostrarFiltros = document.querySelectorAll(".cuerpoPDPA");
var botonFiltrar = document.querySelector(".filtros");





flipPeliculas.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        var overlay = elemento.querySelector(".overlay");
        var contenidoFlipped = elemento.querySelector(".contenidoFlip");
        var contenidoDefault = elemento.querySelector(".contenidoDefault");
        var frontPelicula = elemento.querySelector(".peliculasActive");
        var backPelicula = elemento.querySelector(".peliculasBackInactive");

        if (!elemento.classList.contains("animacionFlip")) {
            elemento.classList.add("animacionFlip");
            elemento.classList.remove("animacionDefault");

            overlay.classList.remove("overlayDefault");
            overlay.classList.add("overlayFlip");

            contenidoFlipped.classList.remove("contenidoFlip");
            contenidoFlipped.classList.add("contenidoFlipBlock");

            contenidoDefault.classList.remove("contenidoDefault");
            contenidoDefault.classList.add("contenidoDefaultRemove");

            frontPelicula.classList.remove("peliculasActive");
            frontPelicula.classList.add("peliculasInactive");

            backPelicula.classList.remove("peliculasBackInactive");
            backPelicula.classList.add("peliculasBackActive");

        } else if (overlay.classList.contains("overlayFlip")) {
            elemento.classList.remove("animacionFlip");
            elemento.classList.add("animacionDefault");

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
  