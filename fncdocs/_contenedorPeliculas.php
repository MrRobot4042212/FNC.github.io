

        <?php
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        require_once("initdb.php");
        if ($conn) {
            $query = "SELECT nombre, genero, sinapsis, fechaEstreno, duracion, presupuesto, recaudacion, srcImagen FROM peliculas";
            $result = mysqli_query($conn, $query);
           

            if ($result) {
                while ($row = mysqli_fetch_assoc($result)) {
                    echo '<section class="gridPeliculas">'
                    echo '<div class="contenedorPeliculas animacionDefault">';
                        echo '<img class="imgPeliculaActive imgPelicula" src="' . $row['srcImagen'] . '" alt="' . $row['nombre'] . '">';
                        echo '<img class="imgPeliculaDetras imgPelicula" src="./img/peliculas/fx/fondoNegro.png" alt="">';
                        echo '<div class="overlay">';
                            echo '<div class="overlayDefault">';
                                echo '<h1 class="nombreTitulo">' . $row['nombre'] . '</h1>';
                                echo '<br>';
                                echo '<span class="rating">';
                                    echo '<h2>RATING</h2>';
                                    echo '<br>';
                                echo '</span>';
                                echo '<div class="contenedorStars">';
                                    echo '<div class="star" data-value="1"></div>';
                                    echo '<div class="star" data-value="2"></div>';
                                    echo '<div class="star" data-value="3"></div>';
                                    echo '<div class="star" data-value="4"></div>';
                                    echo '<div class="star" data-value="5"></div>';
                                echo '</div>';
                                echo '<h4>Click para más información</h4>';
                            echo '</div>';
                            echo '<div class="overlayFlip">';
                                echo '<h1>' . $row['nombre'] . '</h1>';
                                echo '<br>';
                                echo '<h2>Sinapsis</h2>';
                                echo '<p>' . $row['sinapsis'] . '</p>';
                                echo '<br>';
                                echo '<h2>Equipo de rodaje</h2>';
                                echo '<h3>Producido por: ' . $row['productor'] . '</h3>';
                                echo '<h3>Dirección por: ' . $row['director'] . '</h3>';
                                echo '<h3>Actores principales por: ' . $row['actores'] . '</h3>';
                                echo '<h2>Género</h2>';
                                echo '<h3>' . $row['genero'] . '</h3>';
                                echo '<h4>Click para volver a la calificación</h4>';
                            echo '</div>';
                        echo '</div>';
                    echo '</div>';
                }
            }
        
                }
            } else {
                echo "Error al ejecutar la consulta: " . mysqli_error($conn);
            }

            mysqli_close($conn);
        } 
    

           
    
    ?>
</div>


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