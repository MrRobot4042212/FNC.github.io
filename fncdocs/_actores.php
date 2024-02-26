<?php
    $titulo ="Actores";
    $sloganPDPA="Actuaciones que inspiran, historias que perduran. Descubre el arte de la interpretación en nuestra página de películas sobre actores.";
?>

<? require_once ("./_startPDPA.php")?>
    <div class="cuerpoPDPA">
        <section class="filtros">
            <section class="filtrosBasicos">
                <h5> Filtra por actor</h5>
                <input type="text" name="nombreActor" class="inputActor" placeholder="Nombre del Actor">
            </section>              
        </section>
        <section class="gridActor">
            <? require ("./_contenedorActor.php")?>
        </section>
    </div>
<? require_once ("./_endGeneral.php")?>