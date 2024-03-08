<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
$titulo = "Perfil de: " .  $_SESSION["logged_user"];
require("./initdb.php");

$consulta_usuario = mysqli_prepare($conn, "SELECT usuario, nick, email, telefono FROM usuarios WHERE usuario = ?");
mysqli_stmt_bind_param($consulta_usuario, "s", $_SESSION["logged_user"]); 
mysqli_stmt_execute($consulta_usuario);
$resultado_usuario = mysqli_stmt_get_result($consulta_usuario);

if ($resultado_usuario) {
    $usuario = mysqli_fetch_array($resultado_usuario);

    if ($usuario === NULL) {
        header("Location: ./_404.php");
        exit();
    }
}


$consulta_historial = mysqli_prepare($conn, 'SELECT criticas.idPelicula, 
  criticas.idUsuario, criticas.tipo, criticas.valoracion, criticas.comentario,
  peliculas.nombre
   FROM criticas 
   INNER JOIN usuarios ON criticas.idUsuario = usuarios.idUsuario
   INNER JOIN peliculas ON criticas.idPelicula = peliculas.idPelicula
   WHERE usuarios.usuario = ? 
   ');

if ($consulta_historial === false) {
    die('Error en la preparación de la consulta: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($consulta_historial, "s", $_SESSION["logged_user"]);
mysqli_stmt_execute($consulta_historial);
$resultado = mysqli_stmt_get_result($consulta_historial);

if($resultado) {
    $comentarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
} else {
    header("location: ./_404.php");
}

?>

<?php require_once("./_startPerfil.php"); ?>
<div class="cuerpoUsuario">
    <section class="espacioUsuario">
        <h1> Datos Personales</h1>
        <ul>
            <li>Usuario: <?= $usuario["usuario"] ?> </li>
            <li>Nick: <?= $usuario["nick"] ?></li>
            <li>Email: <?= $usuario["email"] ?></li>
            <li>Teléfono: <?= $usuario["telefono"] ?></li>
            <li><a href="_editar.php"><button>Editar perfil</button></li>
        </ul>
    </section>
    <section class="historialComentarios">
        <h1>Historial de críticas</h1>
        <?php foreach($comentarios as $comentario):?>
            <aside class="cajaComentario">
                <p class="nombrePelicula">Pelicula: <?=$comentario["nombre"] ?></p>
                <p class="valoracionPelicula">Valoración: <?=$comentario["valoracion"] ?></p>
                <section class="seccionComentario">
                    <h3 class="tituloComentario">Comentario:</h3>
                    <p class="mensajeComentario"> <?=$comentario["comentario"] ?></p>
                </section>
            </aside>
        <?php endforeach;?>
    </section>

    <section class="añadirComentarios">
        <h1>Añadir Crítica</h1>
        <form action="./_comentarioPost.php" method="POST" id="commentForm">
            <input type="text" name="nombrePelicula" placeholder="Introduce nombre de la película" required>
            <h1>Selecciona el tipo de critica</h1>
            <select name="tipo" id="tipoSeleccionado" onchange="mostrarOcultarInput()">
                <option value="comentario">Comentario</option>
                <option value="valoracion">Valoración</option>
                <option value="ambos" selected>Ambos</option>
            </select>
            <input type="text" name="valoracion" id="valoracionInput" placeholder="Introduce la valoración (0-5)">
            <input type="text" name="comentario" id="comentarioInput" placeholder="Introduce el comentario">
            <input id="botonComentario" type="submit" name="submit" value="Enviar">
        </form>
    </section>
</div>

<?php require_once("./_endPerfil.php"); ?>
