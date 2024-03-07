<?php
session_start();
$titulo = $_SESSION["logged_user"];
require("./initdb.php");

$consulta = mysqli_prepare($conn, "SELECT usuario,nick,email,telefono FROM usuarios WHERE usuario = ?");
mysqli_stmt_bind_param($consulta, "s", $_SESSION["logged_user"]); 
mysqli_stmt_execute($consulta);
$resultado = mysqli_stmt_get_result($consulta);
$usuario = mysqli_fetch_array($resultado);

if ($usuario === NULL){
    header("Location: ./_404.php");
    exit();
}

$nombrePelicula = $_POST["nombrePelicula"];
$valoracion = $_POST["valoracion"];
$comentario = $_POST["comentario"];

$idPelicula_nombre = "SELECT idPelicula FROM pelicula WHERE nombre = '$nombrePelicula'";
idUsuario-
$consulta = mysqli_prepare($conn, "INSERT INTO criticas(idPelicula,idUsario,
tipo,valoracion,comentario) VALUES (?,?,?,?,?)");

if ($consulta === false) {
    die('Error de preparacion de mysql: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($consulta, "iisis", $usuario, $nick, $contraseña, $email, $telefono);

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
        <form action="./_comentarioPost.php" method="post">
            <input type="text" name="nombrePelicula" id="" placeholder="Introduce nombre de la pelicula" required>
            <input type="text" name="valoracion" id="" placeholder="Introduce la valoracion (0-5)">
            <input type="text" name="comentario" id="" placeholder="Introduce el comentario">
            <input type="submit" name="submit" value="Enviar">
        </form>
    </section>
</div>
<?php require_once("./_endPerfil.php"); ?>
