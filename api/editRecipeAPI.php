<?php
	//Access control header
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
	
	// include database and table objects
	include_once '../api/config/database.php';

	// instantiate database and connection
	$database = new Database();
	$db = $database->getCon();
	
	//Grab the given JSON object from POST
	$json = file_get_contents('php://input');
	
	//Temporary JSON string for testing
	//$json = '{"rName":"Apple Slices","rCookingTime":0,"rPrepTime":5,"rServings":2,"steps":["Take an apple.", "Cut apple into slices.", "Serve slices with peanut butter.", "Evacuate the building immediately."], "ingredients":["1 scoop of peanut butter", "2 Fiji apples", "20 HEAPING POUNDS OF PLANKTON"]}';
	
	$inputs = json_decode($json, true);
	
  $rID = $inputs["rID"];
	$rname = $inputs["rName"];
	$rcookingtime = $inputs["rCookingTime"];
	$rpreptime = $inputs["rPrepTime"];
	$rservings = $inputs["rServings"];
	$steps = $inputs["steps"];
	$ingredients = $inputs["ingredients"];
	
	//Need to begin by delete the old version of the recipe
	//Old recipe is found using recipe name. In a future sprint, could be made more foolproof
	//by passing recipe ID from front end.
	
	//rID now found, delete all rows from all tables with matching rID
	$delFromSteps = mysqli_query($db, "
	DELETE FROM recipesteps
	WHERE rID = '" . $rID . "'");
	
	$delFromIngs = mysqli_query($db, "
	DELETE FROM recipeing
	WHERE rID = '" . $rID . "'");
	
	$delFromRecipes = mysqli_query($db, "
	DELETE FROM recipes
	WHERE rID = '" . $rID . "'");
	
	//Previous entry has been entirely deleted. Now insert new recipe (using same rID).

	//Insert recipe into recipes table
	$result = mysqli_query($db,"
	INSERT INTO recipes (rID, rName, rCookingTime, rPrepTime, rServings)
	VALUES (" . $rID . ",'" . $rname . "'," . $rcookingtime . "," . $rpreptime . "," . $rservings . ")");
	
	//Go through while loop to add recipesteps. Steps array is assumed to be
	//the in-order steps, so while loop can be used to enumerate each step by
	//array position.
	$i = 0;
	while ($i < sizeof($steps))
	{
		$result3 = mysqli_query($db,"
		INSERT INTO recipesteps (rID, sNum, sText)
		VALUES (" . $rID . "," . ($i+1) . ",'" . $steps[$i] . "')");
		$i = $i + 1;
	}
	
	//Similarly, loop through the ingredients in the same way
	$i = 0;
	while ($i < sizeof($ingredients))
	{
		$result4 = mysqli_query($db,"
		INSERT INTO recipeing (rID, iName)
		VALUES (" . $rID . ",'" . $ingredients[$i] . "')");
		$i = $i + 1;
	}
	?>