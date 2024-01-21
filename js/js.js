var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");

flipPeliculas.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        image.forEach(function(zoom) {
            zoom.classList.add("backgroundZoom");
            contenido.forEach(function(eliminar) {
                eliminar.classList.add("eliminiarContenido");
                contenedorTexto.forEach(function(textcontent) {
                    textcontent.classList.add("mostarContenidoText")
                    setTimeout(function() {
                        index = 0;
                        escribirTexto(nuevoTextoCompleto);
                        Narrador.play();
                        
                    }, 3000);
                });
            });
        });
    });
});