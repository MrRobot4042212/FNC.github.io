


<?php
    $titulo = "Actores";
    $sloganPDPA = "Actuaciones que inspiran, historias que perduran. Descubre el arte de la interpretación en nuestra página de películas sobre actores.";
?>

<<<<<<< HEAD
<?php require_once("./_startPDPA.php"); ?>
    <div class="cuerpoPDPA">
        <section class="filtros">
            <section class="filtrosBasicos">
                <h5>Filtra por actor</h5>
                <input type="text" name="nombreActor" class="inputActor" placeholder="Nombre del Actor">
            </section>
        </section>
        <section class="gridActor">
            <?php require_once("_contenedorActores.php"); ?>
        </section>
    </div>
<?php require_once("./_endGeneral.php"); ?>
=======
<? require_once ("./_startPDPA.php");?>

<div class="cuerpoPDPA">
    <section class="filtros">
        <section class="filtrosBasicos">
            <h5> Filtra por director</h5>
            <input type="text" name="nombreActor" class="inputActor" placeholder="Nombre del Actor">
        </section>              
    </section>
    <section class="gridActores">
        <? require ("./_contenedorActores.php") ?>
    </section>
</div>
<? require_once ("./_endGeneral.php");?>
>>>>>>> 3a29aebe3319d182b25e4a5dea7ee93323282519
