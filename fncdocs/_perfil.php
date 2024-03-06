<?php
session_start();
$titulo = $_SESSION["logged_user"];
?>

<?require_once("./_startPerfil.php") ?>
    <div class="cuerpoUsuario">
        <section class="espacioUsuario">
            <h1> Datos Personales</h1>
            <ul>
                <li>Usuario: </li>
                <li>Nick: </li>
                <li>Email: </li>
                <li>Teléfono: </li>
            </ul>
        </section>

        <section class="comentarios">
            <h1>Añadir Comentario</h1>
            <form action="./_comentarioPost" method="post">
                <input name="usuarioLogged" type="text" placeholder="Usuario" value="<?=$_SESSION["logged_user"];?>">

            </form>
        </section>
    </div>
<?require_once("./_endPerfil.php") ?>

