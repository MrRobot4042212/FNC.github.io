<?php 
    session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    require_once("initdb.php");
    $consulta = mysqli_prepare($conn, "SELECT nombre, genero, sinapsis, fechaEstreno, duracion, presupuesto, recaudacion, srcImagen, srcFondo FROM peliculas");
    mysqli_stmt_execute($consulta);
    $resultado = mysqli_stmt_get_result($consulta);
    $peliculas = mysqli_fetch_all($resultado,MYSQLI_ASSOC);
    $titulo= "Peliculas";
    $sloganPDPA="Tu opinión cuenta, tu película perfecta comienza aquí: ¡Explora, evalúa, disfruta!";
?>
<? require_once ("_startPDPA.php"); ?>
<div class="cuerpoPDPA">
    <section class="filtros">

        <section class="filtrosBasicos">
            <h5> Filtra por el nombre de la película</h5>
            <input type="text" name="nombrePelicula" class="inputNombrePelicula" placeholder="Nombre de la película">
        </section>

        <h2 class="masFiltros">Mostrar mas filtros</h2>
        <h2 class="menosFiltros">Mostrar menos filtros</h2>

        <section class=" filtrosAvanzadosRemove filtrosAvanzados ">
            <h5> Filtra por el nombre de la película</h5>
            <input type="text" name="nombrePelicula" class="inputNombrePelicula" placeholder="Nombre de la película">
            <h5> Filtra por Actor</h5>
            <input type="text" name="nombreActorPelicula" class="inputActorPelicula" placeholder="Nombre del actor">
            <div class="generoContainer">
                <h5 id="botonGeneros" class="botonGeneros">Géneros</h5>
                <ul class="listaGeneros"> 
                    <li class="genero">Acción</li>
                    <li class="genero">Aventura</li>
                    <li class="genero">Animación</li>
                    <li class="genero">Comedia</li>
                    <li class="genero">Crimen</li>
                    <li class="genero">Documental</li>
                    <li class="genero">Drama</li>
                    <li class="genero">Fantasía</li>
                    <li class="genero">Historia</li>
                    <li class="genero">Terror</li>
                    <li class="genero">Musical</li>
                    <li class="genero">Misterio</li>
                    <li class="genero">Romance</li>
                    <li class="genero">Ciencia ficción</li>
                    <li class="genero">Deporte</li>
                    <li class="genero">Suspense</li>
                    <li class="genero">Guerra</li>
                    <li class="genero">Western</li>
                    <li class="genero">Biografía</li>
                    <li class="genero">Cine negro</li>
                </ul>
            </div>
        </section>
    </section>
    <section class="gridPeliculas">

    <?php foreach($peliculas as $pelicula):?>

    <div class="contenedorPeliculas animacionDefault">
        <img class="imgPeliculaActive imgPelicula" src="<?=$pelicula["srcImagen"]?>" alt="Descripción de la imagen">
        <img class="imgPeliculaDetras imgPelicula" src="<?=$pelicula["srcFondo"]?>" alt="">
        <div class="overlay">
            <div class="overlayDefault">
                <h1 class="nombreTitulo"><?=$pelicula["nombre"]?></h1>
                <br>
                <span class="rating">
                    <h2>RATING</h2>
                    <br>
                </span>
                <div class="contenedorStars"></div>
                <h4>Click para más información</h4>
            </div>

            <div class="overlayFlip">
                <h1><?=$pelicula["nombre"]?></h1>
                <br>
                <h2>Sinapsis</h2>
                <p> <?=$pelicula["sinapsis"]?></p>
                <br>
                <h2>Equipo de rodaje</h2>
                <h2>Género</h2>
                <h3><?=$pelicula["genero"]?></h3>
                <h4>Click para volver a la calificación</h4>
            </div>
        </div>
    </div>

    <?php endforeach; ?>

</section>
</div>
<? require_once ("_endGeneral.php"); ?>