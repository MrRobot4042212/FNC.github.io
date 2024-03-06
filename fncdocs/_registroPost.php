<?php

require("./initdb.php");

if (!isset($_POST['usuario']) || !isset($_POST['nick']) || !isset($_POST['email']) || !isset($_POST['contraseña'])){
    header("location: ./_registro.php");
    exit();
}

$usuario = $_POST['usuario'];
$nick = $_POST['nick'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

$consulta = mysqli_prepare($conn, "INSERT INTO usuarios(usuario, nick, contraseña, email, telefono) VALUES (?,?,?,?,?)");

if ($consulta === false) {
    die('Error de preparacion de mysql: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($consulta, "sssss", $usuario, $nick, $contraseña, $email, $telefono);

if (!mysqli_stmt_execute($consulta)) {
    die('Error de ejecucion de mysql: ' . mysqli_stmt_error($consulta));
}

if (mysqli_stmt_affected_rows($consulta) === 1) {
    echo "Registro exitoso!";
    header("location: ./_login.php");
} else {
    echo "Error en el registro: " . mysqli_stmt_error($consulta);
    header("location: ./_registro.php");
}

mysqli_stmt_close($consulta);

?>