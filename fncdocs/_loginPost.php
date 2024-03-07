<?php
<<<<<<< HEAD
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
=======

require("./initdb.php");

$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

$consulta = mysqli_prepare($conn, "SELECT idUsuario, contraseña FROM usuarios WHERE usuario = ?");
mysqli_stmt_bind_param($consulta, "s", $usuario);
mysqli_stmt_execute($consulta);
$resultado = mysqli_stmt_get_result($consulta);

if($fila = mysqli_fetch_assoc($resultado)) {
    if(password_verify($contraseña, $fila["contraseña"])) {
        $consultaNombreUsuario = mysqli_prepare($conn, "SELECT usuario FROM usuarios WHERE idUsuario = ?");
        mysqli_stmt_bind_param($consultaNombreUsuario, "i", $fila["idUsuario"]);
        mysqli_stmt_execute($consultaNombreUsuario);
        $resultadoNombreUsuario = mysqli_stmt_get_result($consultaNombreUsuario);
        $nombreUsuario = mysqli_fetch_assoc($resultadoNombreUsuario)["usuario"];

        session_start();
        $_SESSION["logged_user"] = $nombreUsuario;
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

?>

>>>>>>> 3a29aebe3319d182b25e4a5dea7ee93323282519
