<?php

session_start();

if (isset($_SESSION ["logged_user"])){
    unset($_SESSION["logged_user"]);
    header('Location: ./_index.php');
    exit();
}else{
    $loggout = "./_login.php";
    if(isset($_SERVER['HTTP_REFERER'])){
        $loggout = $_SERVER['HTTP_REFERER'];
    }
    header ('Location: $loggout');
    exit();
}
?>