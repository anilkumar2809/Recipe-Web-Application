<?php
$servername = "localhost";
$username = "root";
$password = "mysql";

// Creating a connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Creating a database named cop4710
$sql = "CREATE DATABASE recipedat";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully with the name recipedat";
} else {
    echo "Error creating database: " . $conn->error;
}


// closing connection
$conn->close();
?>