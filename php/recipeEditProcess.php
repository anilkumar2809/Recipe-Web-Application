<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>
    <div id="root"></div>
<?php

	// include database and table objects
	include_once '../api/config/database.php';

	// instantiate database and connection
	$database = new Database();
	$db = $database->getCon();
	
	//Write SQL update
	$result = mysqli_query($db,"
	UPDATE recipe
	SET rName = '" . $_POST["rname"] . "'
	,rCookingTime = '" . $_POST["rcooktime"] . "'
	,rPrepTime = '" . $_POST["rpreptime"] . "'
	,rServings = '" . $_POST["rservings"] . "'
	WHERE rID = '" . $_POST['rID'] . "'" 
	);
	
	//TODO: Update recipe steps
	
	//TODO: Update recipe ingredietns

	echo "Recipe Updated<br>";
	echo '<button onClick="javascript:window.location.href=' . 
			 "'viewRecipes.php'" . '">Return to Recipe List</button>';
	
	?>
  </body>
  
</html>
