<?php
$servername = "localhost"; // Change this to your MySQL server hostname or IP address
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "tracking"; // Replace with the name of your MySQL database

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
