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
	//$json = '{"rName":"Apple Slices","rCookingTime":10,"rPrepTime":20,"rServings":4,"steps":["Take an apple.", "Cut apple into slices.", "Serve slices with peanut butter."], "ingredients":["1 scoop of peanut butter", "2 Fiji apples"]}';
	
	$inputs = json_decode($json, true);
	
	$rname = $inputs["rName"];
	$rcookingtime = $inputs["rCookingTime"];
	$rpreptime = $inputs["rPrepTime"];
	$rservings = $inputs["rServings"];
	$steps = $inputs["steps"];
	$ingredients = $inputs["ingredients"];

	//Insert recipe into recipes table
	$result = mysqli_query($db,"
	INSERT INTO recipes (rName, rCookingTime, rPrepTime, rServings)
	VALUES ('" . $rname . "'," . $rcookingtime . "," . $rpreptime . "," . $rservings . ")");
	
	//Retrieve generated rID for recipe and ingredient table writing
	$result2 = mysqli_query($db,"
	SELECT R.rID
	FROM recipes as R
	WHERE R.rName = '" . $rname . "'"
	);
	
	//Fetch query rows to get recipe ID
	if (mysqli_num_rows($result2) > 0)
	{
		// output data of each row
		while($row = mysqli_fetch_assoc($result2)) 
		{
			$rID = $row["rID"];
		}
	} 
	else
	{
		//Error has occurred
	}
	
	//$rID is ID of new recipe, which can be used for steps and ingredients.
	
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