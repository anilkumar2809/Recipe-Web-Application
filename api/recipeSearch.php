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
	$inputs = json_decode($json, true);
	
	//get the search string from frontend
	$searchString = $inputs["searchTerm"];

	//test string
	$searchString = strtolower($searchString);
	// echo "string: ".$searchString."<br>";
	

	$i = 0;
	// use this to store ID's of recipe that matches searchString
	$recipeIndex = array();

	// get data from recipe table
	$query = "SELECT * FROM recipes";
	$result = $db->query($query);

	//match with recipe title
	while($row = $result->fetch_array(MYSQLI_ASSOC)){ 
		$rName = $row["rName"];
		$rID = $row["rID"];
		$rName = strtolower($rName);
		//echo "recipe".$rName."<br>";


		if(strpos($rName, $searchString)!==false || strcmp($rName, $searchString) == 0){
			
			//print recipe 
			//echo "found".$searchString;
			$recipeIndex[] = $rID;
			//echo $recipeIndex[$i],"<br>";
			$i++;
		}
	}


	// get data from recipeIng table 
	$query = "SELECT * FROM recipeIng";
	$result = $db->query($query);


	//match with recipe ingredients
	while($row = $result->fetch_array(MYSQLI_ASSOC)){ 
		$iName = $row["iName"];
		$rID = $row["rID"];
		$iName = strtolower($iName);
		
		if(strpos($iName, $searchString)!==false || strcmp($rName, $searchString) == 0){
			
			//print recipe 
			//echo "found".$searchString;
			$recipeIndex[] = $rID;
			//echo $recipeIndex[$i],"<br>";
			$i++;
		}
	} 

	// remove any duplicate values in recipeIndex
	$recipeUIndex = array_combine($recipeIndex, $recipeIndex);
	
	//foreach($recipeUIndex as $value){
    //echo $value . "<br>";
	//}

	//return the recipe ID's to frontend
	
	//header('Content-Type: application/json');
	echo json_encode($recipeUIndex);
 
 
?>