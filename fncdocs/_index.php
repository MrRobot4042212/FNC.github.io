<?php
require ("./initdb.php");
$titulo = "Inicio";
$slogan = "Tu guía cinéfila: Opiniones auténticas, decisiones acertadas.";
session_start();
$usuario= $_SESSION["logged_user"];

?>

<?php require_once("_startGeneral.php")?>


<div class="cuerpo">

<section class="espacioFondo">
    <?php   ?>
    <h1>Bienvenido: <?= $usuario?></h1>
    <h4>FilmsNcritics es una plataforma en línea dedicada a recopilar y presentar opiniones de usuarios sobre películas de diversas épocas, géneros y culturas cinematográficas. La página web se ha establecido como un espacio interactivo donde los amantes del cine pueden expresar sus pensamientos y evaluaciones sobre las últimas producciones cinematográficas, clásicos atemporales y películas independientes.</h4>
</section>

<div class="separador"></div>

<section class="espacioCine">

    <div class="slider">
        <section class="espacioFondo">
            <h1>Ultimas 3 addiciones</h1>
        </section>
        <ul>
            <li><img class="peliculas" src="../img/peliculas/annabelle_1.png" alt=""></li>
            <li><img class="peliculas" src="../img/peliculas/jurassicWorld_1.png" alt=""></li>
            <li><img class="peliculas" src="../img/peliculas/lasCronicasDeNarnia_1.png" alt=""></li>
            <li><img class="peliculas" src="../img/peliculas/losChicosDelCoro.png" alt=""></li>
            <li><img class="peliculas" src="../img/peliculas/niñosGrandes_1.png" alt=""></li>
            <li><img class="peliculas" src="../img/peliculas/ElPadrino.jpg" alt=""></li> 
        </ul>
    </div>
    <div class="graficaSeccion">
        <div id="chart_div" style="width:400; height:300"></div>
        <div id="barchart_div" style="width:400; height:300"></div>
        <h4 class="uneteIndex"><a href="./Registro.php">UNETE A LA FAMILIA</a></h4>
    </div>
            
</section>

<div class="separador"></div>

<section class="espacioFondo">
    <h1 class="titulo_cuerpo">Top 6 películas</h1><br>
</section>

<section class="espacioTopPeliculas">
    <div>
        <img class="peliculas" src="./img/peliculas/top6/top1.jpg" alt="">
    </div>

    <div>
        <img class="peliculas" src="./img/peliculas/top6/top2.jpg" alt="">
    </div>

    <div>
        <img class="peliculas" src="./img/peliculas/top6/top3.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="./img/peliculas/top6/top4.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="./img/peliculas/top6/top5.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="./img/peliculas/top6/top6.png" alt="">

    </div>

</section>
</div>

<?php require_once("_endGeneral.php") ?>