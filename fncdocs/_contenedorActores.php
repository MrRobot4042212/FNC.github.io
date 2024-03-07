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


