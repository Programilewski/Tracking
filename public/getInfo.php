<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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
// Check if the date parameter is provided in the request
if (isset($_GET['date'])) {
    $requestedDate = $_GET['date'];

    // Validate and sanitize the date (optional)
    // $requestedDate = date("Y-m-d", strtotime($requestedDate));

    // Query to retrieve data based on the provided date
    $query = "SELECT * FROM AdamKubicki WHERE Date like '$requestedDate'";
    $result = $conn->query($query);

    if ($result) {
        // Fetch data as an associative array
        $data = $result->fetch_all(MYSQLI_ASSOC);

        // Return data as JSON
        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        echo "Error executing query: " . $conn->error;
    }
} else {
    echo "Date parameter is missing in the request.";
}

// Close connection
$conn->close();
