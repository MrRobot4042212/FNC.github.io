<div class="bNavegacion">
        <nav class="links">
            <ul>
                <li class="despegable"><a href="./_index.php">Inicio</a></li>
                <li class="despegable"><a href="./_peliculas.php">Películas</a></li>
                <li class="despegable"><a href="./_directores.php">Directores</a></li>
                <li class="despegable"><a href="./_productores.php">Productores</a></li>
                <li class="despegable"><a href="./_actores.php">Actores</a></li> 
                <li class="despegable"><a href="./_premios.php">Premios</a></li>
                <li class="despegable"><a href="./_contacto2.php">Contacto </a></li> 
                <? if (!isset($_SESSION["logged_user"])) { ?>
                    <li class="despegable"><a href="./_login.php">Login</a></li>
                    <li class="despegable"><a href="./_registro.php">Registro</a></li>
                <? } else { ?> 
                    <li class="despegable"><a href="./_perfil.php">Perfil</a></li>
                    <li class="despegable"><a href="./_logout.php">Cerrar sesion</a></li>
                <? } ?>

            </ul>
        </nav>
 </div>