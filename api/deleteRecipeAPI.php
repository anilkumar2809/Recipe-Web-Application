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
	//$json = '{"rID": 105}';
	
	$inputs = json_decode($json, true);
	
    $rID = $inputs["rID"];

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
	
	//Entry has been entirely deleted.
	?>