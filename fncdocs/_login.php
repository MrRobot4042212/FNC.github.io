<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

    $titulo ="Login";
    $fuenteCss ="../css/loginD.css"
?>
<? require_once("./_startHamburgerLoginRegistro.php"); ?>
  <div class="cuadro">
    <form action="./_loginPost.php" method="POST">
      <h1>Login</h1>
      <div class="caja">
        <input name="usuario" id="usuario" type="text" placeholder="Usuario" required>
        <i class='bx bxs-user'></i>
      </div>

      <div class="caja">
        <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña" required>
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

    </form>
  </div>
<? require_once("./_endHamburgerLoginRegistro.php"); ?> 

