<?php
require ("./initdb.php");
// Obtener los valores del formulario de inicio de sesión
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// Consulta SQL para comprobar si el usuario y la contraseña existen en la base de datos
$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND contraseña='$contraseña'";
$result = $conn->query($sql);

// Comprobar si se encontró un usuario con las credenciales proporcionadas
if ($result->num_rows > 0) {
    // Usuario autenticado correctamente, redireccionar a la página de inicio
    header("Location: ./_index.php");
    exit();
} else {
    // Usuario o contraseña incorrectos, mostrar un mensaje de error
    echo "Usuario o contraseña incorrectos";
}
// Cerrar conexión a la base de datos
$conn->close();
?>