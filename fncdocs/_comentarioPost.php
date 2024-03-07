<?php

    require("./initdb.php");

    $nombrePelicula = $_POST["nombrePelicula"];
    $valoracion = $_POST["valoracion"];
    $comentario = $_POST["comentario"];
    $nombreUsuario = $_SESSION["logged_user"];
    $tipoSeleccionado = $_POST['tipo'];

    $resultadoIdPelicula = mysqli_query($conn, "SELECT idPelicula FROM peliculas WHERE nombre = '$nombrePelicula'");
    $filaIdPelicula = mysqli_fetch_assoc($resultadoIdPelicula);
    $idPelicula = $filaIdPelicula['idPelicula'];

    $resultadoIdUsuario = mysqli_query($conn, "SELECT idUsuario FROM usuarios WHERE usuario = '$nombreUsuario'");
    $filaIdUsuario = mysqli_fetch_assoc($resultadoIdUsuario);
    $idUsuario = $filaIdUsuario['idUsuario'];

    $consulta_criticas = mysqli_prepare($conn, "INSERT INTO criticas(idPelicula, idUsuario, tipo, valoracion, comentario) VALUES (?, ?, ?, ?, ?)");
    mysqli_stmt_bind_param($consulta_criticas, "iisss", $idPelicula, $idUsuario, $tipoSeleccionado, $valoracion, $comentario);
    mysqli_stmt_execute($consulta_criticas);

    if ($consulta_criticas === false) {
        die('Error de preparacion de mysql: ' . mysqli_error($conn));
    }

    if (mysqli_stmt_affected_rows($consulta_criticas) === 1) {
        echo "¡Critica Registrada!";
        header("location: ./_perfil.php");
    } else {
        echo "Error en el registro: " . mysqli_stmt_error($consulta_criticas);
        header("location: ./_404");
    }

    mysqli_stmt_close($consulta_criticas);
    mysqli_close($conn);


    
    ?>