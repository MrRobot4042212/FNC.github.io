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
