<?php
require ("./initdb.php");
// con esto se obtienen los valores del formulario de login
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// con esto se realiza una consulta mySQL par acomprobar si el nombre y la contraseña están en la base de datos
$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND contraseña='$contraseña'";
$result = $conn->query($sql);

// Esto comprueba si se encontró un usuario con las credenciales proporcionadas
if ($result->num_rows > 0) {
    // si se enceuntra, te lleva a la página de inicio
    header("Location:");
    exit();
} else {
    // si es incr¡orrecto, salta un mensaje de error
    echo "Usuario o contraseña incorrectos";
}
// Cierra la conexión con la base de datos
$conn->close();
?>