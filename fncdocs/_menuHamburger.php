<ul id="menu">
        <a href="./_index.php"><li>Inicio</li></a>
        <a href="./_peliculas.php"><li>Películas</li></a>
        <a href="./_directores.php"><li>Directores</li></a>
        <a href="./_productores.php"><li>Productores</li></a>
        <a href="./_actores.php"><li>Actores</li></a>
        <a href="./_contacto2.php"><li>Contacto</li></a>
        <? if (!isset($_SESSION["logged_user"])) { ?>
            <a href="./_Login.php"><li>Login</li></a>
            <a href="./_Registro.php"><li>Registro</li></a>
        <? } else { ?> 
            <a href="./_perfil.php"><li>Perfil</li></a>
           <a href="./_logout.php"><li>Cerrar sesion</li></a>
        <? } ?>


</ul>