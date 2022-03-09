<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  // include database files
  include_once './database.php';
  
  // instantiate database and students object
  $database = new Database();
  $db = $database->getConnection();
 
  // load sql script
  $sql = file_get_contents("./resetDemoData.sql");
  
  // Execute sql script
  try {
    $db->exec($sql);
	echo "reset successful";
  }
  catch(PDOException $e)
  {
     echo $e->getMessage();
  }

?>