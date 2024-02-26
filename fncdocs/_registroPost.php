<?php

include("./initdb.php");


if (!isset($_POST['usuario'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['nick'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['email']) || !preg_match('/^[a-zA-Z0-9][@]{1}[a-zA-Z0-9]', $_POST['email'])){
    header("location: ./_registro.php");
    exit();
}

if (!isset($_POST['password'])){
    header("location: ./_registro.php");
    exit();
}

$usuario = $_POST['usuario'];
$nick = $_POST['nick'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$contraseña = $_POST['contraseña'];
$ccontraseña = $_POST['ccontraseña'];

$consulta = mysqli_prepare($conn,
    "INSERT INTO usuarios (usuario, nick, contraseña, email, telefono)
    VALUES (?,?,?,?,?)
");
mysqli_stmt_bind_param($consulta, "sssss", $usuario, $nick, $contraseña, $email, $telefono);

mysqli_stmt_execute($consulta);

if (mysqli_stmt_affected_rows($consulta) === 1){
    header("location: ./_index.php");
}
else{
    header("location: ./_registro.php");
}

mysqli_close($conn);

?>