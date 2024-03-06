<?php

session_start();

if (isset($_SESSION ["logged_user"])){
    unset($_SESSION["logged_user"]);
    header('Location: ./_index.php');
    exit();
}else{
    $previous = "./_login.php";
    if(isset($_SERVER['HTTP_REFERER'])){
        $previous = $_SERVER['HTTP_REFERER'];
    }
    header ('Location: $previous');
    exit();
}
?>