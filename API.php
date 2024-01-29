<?php
include("db.php");

if (isset($_GET["date"]) && isset($_GET["member"])) {
    $date = $_GET["date"];
    $member = $_GET["member"];
    $query = "SELECT latitude,longitude FROM rafalkolacz";
    $results = mysqli_query($conn, $query);
    $data = [];
    while ($row = mysqli_fetch_row($results)) {
        array_push($data, $row);
    }
    echo json_encode($data);
}
