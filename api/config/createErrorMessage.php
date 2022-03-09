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
	
	?>