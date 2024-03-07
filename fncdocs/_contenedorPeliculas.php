<?php
    require_once("initdb.php");

    if ($conn) {
        $query = "SELECT nombre, descripcion, premios, srcImagen FROM actores";


        $result = mysqli_query($conn, $query);

        if ($result) {
           
            while ($row = mysqli_fetch_assoc($result)) {
                echo '<div class="contenedorActor">';
                    echo '<div class="posicionFrontal">';
                        echo '<img class="imagenFrontal" src="' . $row['srcImagen'] . '" alt="' . $row['nombre'] . '">';
                    echo '</div>';
                    echo '<div class="posicionCarta">';
                        echo '<section class="informacionActor">';
                            echo '<h1>' . $row['nombre'] . '</h1>';
                            echo '<div class="col2">';
                            echo '<h2>Descripción</h2>';
                                echo '<p>' . $row['descripcion'] . '</p>';
                            echo '</div>';
                            echo '<div class="col3">';
                            echo '<h2>Premios destacados</h2>';
                                echo '<p>' . $row['premios'] . '</p>';
                            echo '</div>';
                        echo '</section>';
                    echo '</div>';
                echo '</div>';
            }
        } else {
            echo "Error al ejecutar la consulta: " . mysqli_error($conn);
        }

        mysqli_close($conn);
    } 
?>


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