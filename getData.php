<?php 
    $etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];
    $datosVentas = [5000, 1500, 8000, 5102];
    // Ahora las imprimimos como JSON para pasarlas a AJAX, pero las agrupamos
    $respuesta = [
        "etiquetas" => $etiquetas,
        "datos" => $datosVentas,
    ];
    echo json_encode($respuesta);
?>
