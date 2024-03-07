<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
$titulo = $_SESSION["logged_user"];
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
        </ul>
    </section>
    <section class="historialComentarios">
        <h1>Historial de comentarios</h1>
        <aside class="cajaComentario">
            <p class="nombrePelicula">Pelicula: </p>
            <p class="valoracionPelicula">Valoracion: </p>
            <section class="seccionComentario">
                <h3 class="tituloComentario">Comentario:</h3>
                <p class="mensajeComentario"></p>
            </section>
        </aside>
    </section>

    <section class="añadirComentarios">
    <h1>Añadir Comentario</h1>
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
