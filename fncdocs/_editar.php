<?php require("_startGeneral.php")?>
<?php
session_start();
require("initdb.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nick = $_POST['nick'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    if(empty($nick) || empty($telefono) || empty($correo)){
        exit();
    }
    else{
        $actualizar = "UPDATE usuarios SET nick=?, telefono=?, email=? WHERE usuario=?";
        $usuario = $conn->prepare($actualizar);
        $usuario->bind_param("ssss", $nick, $telefono, $correo, $_SESSION['logged_user']);
        $usuario->execute();
        $usuario->close();

        header("Location: _perfil.php");
        exit();
    }
}


$datosconsulta = "SELECT * FROM usuarios WHERE usuario = ?";
$datos = $conn->prepare($datosconsulta);
$datos->bind_param("s", $_SESSION['logged_user']);
$datos->execute();
$result = $datos->get_result();
while ($row = $result->fetch_assoc()) {
    echo "<div class='informacion' id='informacion'>";
    echo "<form method='post' enctype='multipart/form-data'>";
    echo "<br>";
    echo "<h4>" . $row['usuario'] . "</h4>";
    echo "<h5> Información </h5>";
    echo "<p><label for='nick'>Nick:</label>";
    echo "<input name='nick' type='text' value='" . $row['nick'] . "'</p><br>";
    echo "<p><label for='telefono'>Teléfono:</label>";
    echo "<input name='telefono' type='text' value='" . $row['telefono'] . "'</p><br>";
    echo "<p><label for='correo'>Correo:</label>";
    echo "<input name='correo' type='email' value='" . $row['email'] ."'</p><br><br>";
    echo "<input type='submit' value='Guardar Cambios'>";
    echo "<a href='/fncdocs/_perfil.php'><input type='button' name='volver' value='Volver'></a>";
    echo "</form>";
    echo "</div>";
}


$datos->close();
$conn->close(); 
?>
<?php require("_endGeneral.php")?>
