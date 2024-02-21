<?php
    $titulo ="Registro";
    $fuenteCss ="../css/Registro.css"
?>
<? require_once("./_startHamburgerLoginRegistro.php"); ?>
    <div class="cuadro">
        <form action="">
        <h1>Regístrate en <br> <font color="red">Films</font>N<font color="red">Critics</font></h1>
        <div class="caja">
            <input type="text" placeholder="Usuario" required>
            <i class='bx bxs-user'></i>
        </div>
        <div class="caja">
            <input type="text" placeholder="Nick" required>
            <i class='bx bx-user'></i>
        </div>

        <div class="caja">
            <input type="text" placeholder="Correo electrónico" required>
            <i class='bx bxs-envelope' ></i>
        </div>

        <div class="caja">
            <input type="text" placeholder="Teléfono" required>
            <i class='bx bxs-phone'></i>
        </div>

        <div class="caja">
            <input type="password" placeholder="Contraseña" required>
            <i class='bx bxs-lock-alt' ></i>
        </div>

        <div class="caja">
            <input type="password" placeholder="Repita la contraseña" required>
            <i class='bx bxs-lock-alt' ></i>
        </div>

        <button type="submit" class="boton">Crear cuenta</button>
        </form>
    </div>
    <script src="../js/Registro.js"></script>

<? require_once("./_endHamburgerLoginRegistro.php"); ?>
