<?php
$conn = mysqli_connect("localhost", "root", "root", "fnc", "3308");

if (mysqli_connect_errno()) {
    echo "Failed to connect to mysql: " . mysqli_connect_errno();
    exit();
}
mysqli_select_db($conn, ejasignaturas);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);