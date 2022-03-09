<?php 
//Access control header 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");

//connect to database
	$dbc = @mysqli_connect ("localhost","root","mysql","recipedat") OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );

// grab recipes, ingredients, and steps
	$recipes = mysqli_query($dbc, "
    SELECT *
    FROM recipes
  ");
	$ingredients = mysqli_query($dbc, "
    SELECT *
    FROM recipeing
  ");
	$steps = mysqli_query($dbc, "
    SELECT *
    FROM recipesteps
  ");

// build single array to store all recipes, ingredients, and steps
  $recipeData=array();
  while($recipe = mysqli_fetch_assoc($recipes))
  { 
    $recipeData[$recipe["rID"]]=$recipe;
  }

// add ingredients to each recipe
  while($ingredient = mysqli_fetch_assoc($ingredients))
  { 
    $recipeData[$ingredient["rID"]]["ingredients"][]=$ingredient;
  }

// add steps to each recipe
  while($step = mysqli_fetch_assoc($steps))
  { 
    $recipeData[$step["rID"]]["steps"][]=$step;
  }
	
//pass json array as json object
	echo json_encode($recipeData);
	
?>

           
			
                 
                          

           
			
                 
                          
