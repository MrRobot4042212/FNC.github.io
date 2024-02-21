<div class="contenedorPeliculas animacionDefault">
    <img class="imgPeliculaActive imgPelicula" src="<?=$imgPelicula?>" alt="Descripción de la imagen">
    <img class="imgPeliculaDetras imgPelicula" src="<?=$imgDetras?>" alt="">
    <div class="overlay">
        <div class="overlayDefault">
            <h1 class="nombreTitulo"><?=$tituloPelicula?>></h1>
            <br>
            <span class="rating">
                <h2>RATING</h2>
                <br>
            </span>
            <div class="contenedorStars"><?=$valoracionPelicula?></div>
            <h4>Click para más información</h4>
        </div>

        <div class="overlayFlip">
            <h1><?=$tituloPelicula?>/h1>
            <br>
            <h2>Sinapsis</h2>
            <p> <?=$sinapsis ?></p>
            <br>
            <h2>Equipo de rodaje</h2>
            <h3>Producido por: <?=$productores?> </h3>
            <h3>Dirección por: <?=$directores?> </h3>
            <h3>Actores principales por: <?=$actores?> </h3>
            <h2>Género</h2>
            <h3><?=$genero?></h3>
            <h4>Click para volver a la calificación</h4>
        </div>   
    </div>
 </div>