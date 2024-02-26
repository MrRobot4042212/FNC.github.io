<?php
    $titulo ="Productores";
    $sloganPDPA="Detrás de cada gran película, hay un productor visionario. Descúbrelo aquí.";
?>
<? require_once ("./_startPDPA.php");?>

<div class="cuerpoPDPA">
    <section class="filtros">
        <section class="filtrosBasicos">
            <h5> Filtra por productor</h5>
            <input type="text" name="nombreProductor" class="inputProductor" placeholder="Nombre del Productor">
        </section>
    </section>
    <section class="gridDirectores">
        <? require ("./_contenedorProductores.php") ?>
    </section>
</div>
<? require_once ("./_endGeneral.php");?>