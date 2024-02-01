<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// phpinfo();

// Database connection details
$servername = "localhost";
$username = "izak";
$password = "103@Ny4ff";
$dbname = "Tracking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["submit"])) {

    // Check if a file was submitted
    if ($_FILES["file"]["error"] == UPLOAD_ERR_OK) {
        $file = $_FILES["file"]["tmp_name"];

        // Read CSV file
        $csvData = array_map('str_getcsv', file($file));
        // var_dump($csvData);
        // Iterate through CSV data
        $counter = 0;
        foreach ($csvData as $row) {
            $name = $row[0];
            $date = $row[1];
            $latitude = (float)$row[2];
            $longitude = (float)$row[3];
            $speed = $row[5];
            // Data does not exist, insert into the database

            if ($counter !== 0) {
                $insertQuery = "INSERT INTO `wojciechBilinski` (`ID`, `Date`, `Latitude`, `Longitude`, `Speed`) VALUES (NULL, '$date', '$latitude', '$longitude', '$speed')";
                $conn->query($insertQuery);
            }
            $counter++;
        }

        echo "CSV data successfully uploaded!";
    } else {
        echo "Error uploading file.";
    }
}

// Close connection
$conn->close();
