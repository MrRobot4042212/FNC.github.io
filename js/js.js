var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
var flipOverlay = document.querySelectorAll(".overlay")
var contenidoFlipped = document.querySelectorAll(".contenidoFlip")
var contenidoDefault = document.querySelectorAll(".contenidoDefault")

flipPeliculas.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        if (elemento.classList.contains("animacionDefault")) {
            elemento.classList.remove("animacionDefault");
            elemento.classList.add("animacionFlip");

            flipOverlay.forEach(function (overlay) {
                overlay.classList.remove("overlayDefault");
                overlay.classList.add("overlayFlip");
            });

            contenidoFlipped.forEach(function (contenido) {
                contenido.classList.remove("contenidoFlip");
                contenido.classList.add("contenidoFlipBlock");
            });
            contenidoDefault.forEach(function (cDefault){
                
                cDefault.classList.remove("contenidoDefault");
                cDefault.classList.add("contenidoDefaultRemove");
            });


        } else {

            elemento.classList.remove("animacionFlip");
            elemento.classList.add("animacionDefault");

            flipOverlay.forEach(function (overlay) {
                overlay.classList.remove("overlayFlip");
                overlay.classList.add("overlayDefault");
            });

            contenidoFlipped.forEach(function (contenido) {
                contenido.classList.remove("contenidoFlipBlock");
                contenido.classList.add("contenidoFlip");
            });

            contenidoDefault.forEach(function (cDefault){
                
                cDefault.classList.add("contenidoDefault");
                cDefault.classList.remove("contenidoDefaultRemove");
            });
        }
    });
});