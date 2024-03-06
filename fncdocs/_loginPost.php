<?php
require("./initdb.php");

$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

$consulta = mysqli_prepare($conn, "SELECT idUsuario, contraseña FROM usuarios WHERE usuario = ?");
mysqli_stmt_bind_param($consulta, "s", $usuario);
mysqli_stmt_execute($consulta);
$resultado = mysqli_stmt_get_result($consulta);

if($fila = mysqli_fetch_assoc($resultado)) {
    if(password_verify($contraseña, $fila["contraseña"])) {
        session_start();
        $_SESSION["logged_user"] = $fila["idUsuario"];
        header('Location: ./_index.php');
        exit();
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}

mysqli_stmt_close($consulta);
mysqli_close($conn);

