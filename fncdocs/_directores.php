<?php
    $titulo ="Directores";
    $sloganPDPA="Guiando la visión, creando la magia: ¡Donde los directores encuentran su escena perfecta en la web del cineasta!";
?>

<? require_once ("./_startPDPA.php");?>

<div class="cuerpoPDPA">
    <section class="filtros">
        <section class="filtrosBasicos">
            <h5> Filtra por director</h5>
            <input type="text" name="nombreDirector" class="inputDirector" placeholder="Nombre del director">
        </section>              
    </section>
    <section class="gridDirectores">
        <? require ("./_contenedorDirectores.php") ?>
    </section>
</div>

<? require_once ("./_endPDPA.php");?>