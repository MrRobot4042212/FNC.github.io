<?php

require("./initdb.php");

if (!isset($_POST['usuario'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['nick'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['email'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['contraseña'])){
    header("location: ./_registro.php");
    exit();
}
$usuario = $_POST['usuario'];
$nick = $_POST['nick'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$contraseña = $_POST['contraseña'];

$consulta = mysqli_prepare($conn, "INSERT INTO usuarios(usuario, nick, contraseña, email, telefono) VALUES (?,?,?,?,?)");

if ($consulta === false) {
    die('Error preparing statement: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($consulta, "sssss", $usuario, $nick, $contraseña, $email, $telefono);

if (!mysqli_stmt_execute($consulta)) {
    die('Error executing statement: ' . mysqli_stmt_error($consulta));
}

if (mysqli_stmt_affected_rows($consulta) === 1) {
    echo "Registro exitoso!";
} else {
    echo "Error en el registro: " . mysqli_stmt_error($consulta);
}

mysqli_stmt_close($consulta);

?>