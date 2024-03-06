<?php
    $titulo ="Login";
    $fuenteCss ="../css/loginD.css"
?>
<? require_once("./_startHamburgerLoginRegistro.php"); ?>
  <div class="cuadro">
      <h1>Login</h1>

      <div class="caja">
        <input id="usuario" type="text" placeholder="Usuario" required>
        <i class='bx bxs-user'></i>
      </div>

      <div class="caja">
        <input id="contraseña" type="password" placeholder="Contraseña" required>
        <i class='bx bxs-lock-alt' ></i>
      </div>

      <div class="olvidado">
        <label><input type="checkbox">Recuérdamela</label>
        <a href="./PeliculitasGiratorias.html">¿Has olvidado la contraseña?</a>
      </div>

      <a id="irIndex" class="boton" href=""><button name="botonLogin" id="botonLogin" type="submit" class="boton">Login</button></a>

       <div class="linkRegistro">
        <p>¿No tienes cuenta? <a href="./Registro.html">Regístrate</a></p>
        
      </div>
  </div>
  <script src="../js/login.js"></script>

<? require_once("./_endHamburgerLoginRegistro.php"); ?> 
---------------------------------------------------------------------------
<?php
// Conexión a la base de datos
$servername = "localhost"; // Cambia localhost por tu servidor si es diferente
$username = "usuario"; // Cambia usuario por tu nombre de usuario de la base de datos
$password = "contraseña"; // Cambia contraseña por tu contraseña de la base de datos
$dbname = "fnc"; // Cambia fnc por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los valores del formulario de inicio de sesión
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// Consulta SQL para comprobar si el usuario y la contraseña existen en la base de datos
$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND contraseña='$contraseña'";
$result = $conn->query($sql);

// Comprobar si se encontró un usuario con las credenciales proporcionadas
if ($result->num_rows > 0) {
    // Usuario autenticado correctamente, redireccionar a la página de inicio
    header("Location: index.html");
    exit();
} else {
    // Usuario o contraseña incorrectos, mostrar un mensaje de error
    echo "Usuario o contraseña incorrectos";
}

// Cerrar conexión a la base de datos
$conn->close();
?>
