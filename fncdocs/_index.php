<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
require("./initdb.php");
$titulo = "Inicio";
$slogan = "Tu guía cinéfila: Opiniones auténticas, decisiones acertadas.";
$usuario= $_SESSION["logged_user"];


$fecha_actual = date("Y-m-d");
$consulta = mysqli_prepare($conn, "SELECT srcImagen FROM peliculas WHERE fechaEstreno <= ? ORDER BY fechaEstreno LIMIT 3");
mysqli_stmt_bind_param($consulta, "s", $fecha_actual);
mysqli_stmt_execute($consulta);
$resultado = mysqli_stmt_get_result($consulta);
$peliculas = mysqli_fetch_all($resultado, MYSQLI_ASSOC);


?>

<?php require_once("_startGeneral.php")?>

<div class="cuerpo">

<section class="espacioFondo">
    <h1>Bienvenido <?=$usuario?></h1>
    <h4>FilmsNcritics es una plataforma en línea dedicada a recopilar y presentar opiniones de usuarios sobre películas de diversas épocas, géneros y culturas cinematográficas.
     La página web se ha establecido como un espacio interactivo donde los amantes del cine pueden expresar sus pensamientos y evaluaciones sobre las últimas producciones cinematográficas, clásicos atemporales y películas independientes.</h4>
</section>

<div class="separador"></div>

<section class="espacioCine">

    <div class="slider">
        <section class="espacioFondo">
            <h1>Últimas 3 adiciones</h1>
        </section>
        <ul>
            <?php foreach($peliculas as $pelicula): ?>
                <li><img class="peliculas" src="<?=$pelicula["srcImagen"]?>" alt=""></li>
            <?php endforeach;?> 
        </ul>
    </div>
    <div class="graficaSeccion">
        <div id="chart_div" style="width:400; height:300"></div>
        <div id="barchart_div" style="width:400; height:300"></div>
        <h4 class="uneteIndex"><a href="./_registro.php">UNETE A LA FAMILIA</a></h4>
    </div>
            
</section>

<div class="separador"></div>

<section class="espacioFondo">
    <h1 class="titulo_cuerpo">Top 6 películas</h1><br>
</section>

<section class="espacioTopPeliculas">
    <div>
        <img class="peliculas" src="../img/peliculas/top6/top1.jpg" alt="">
    </div>

    <div>
        <img class="peliculas" src="../img/peliculas/top6/top2.jpg" alt="">
    </div>

    <div>
        <img class="peliculas" src="../img/peliculas/top6/top3.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="../img/peliculas/top6/top4.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="../img/peliculas/top6/top5.png" alt="">
    </div>

    <div>
        <img class="peliculas" src="../img/peliculas/top6/top6.png" alt="">

    </div>

</section>
</div>

<?php require_once("_endGeneral.php") ?>