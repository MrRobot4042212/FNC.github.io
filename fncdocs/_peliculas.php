<?php 
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
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
        <? require ("./_contenedorPeliculas.php"); ?>
    </section>
</div>
<? require_once ("_endGeneral.php"); ?>