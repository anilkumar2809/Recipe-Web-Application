<html>
<?php
// include database and table objects
include_once '../api/config/database.php';

// instantiate database and connection
$database = new Database();
$db = $database->getCon();

//TODO: Get recipe ID from recipe list
//$recipeID = $_POST["rID"];
$recipeID = 100;

//First, get basic recipe information
$result = mysqli_query($db,"
SELECT *
FROM recipes AS R
WHERE R.rID = " . strval($recipeID) 
);


//Grab recipe attributes from recipes table
foreach ($result as $row)
{
	$rName = $row["rName"];
	$rCookingTime = $row["rCookingTime"];
	$rPrepTime = $row["rPrepTime"];
	$rServings = $row["rServings"];
}

//Next, grab all the recipe steps from recipesteps table, row by row
$result2 = mysqli_query($db,"
SELECT *
FROM recipesteps AS RS
WHERE RS.rID = " . strval($recipeID) 
);

//Create array to store data for each step.
$stepArray = array();

//Write row by row
while ($row = $result2->fetchrow())
{
	//Append next step to array. Second field of array_pad is the final size desired to pad values to.
	$stepArray = array_pad($stepArray,sizeof($stepArray)+1,$row[3]);

}

//Finally, grab all ingredients, row by row
$result3 = mysqli_query($db,"
SELECT *
FROM recipeing AS RI
WHERE RI.rID = " . strval($recipeID) 
);

//Create array to store data for each step.
$ingArray = array();

//Write row by row
while ($row = $result3->fetchrow())
{
	//Append next ingredient to array.
	$ingArray = array_pad($ingArray,sizeof($ingArray)+1,$row[3]);

}

//All data retrieved, now need to write to page to display.

?>
<body>
<table class ="table" class="recipe" border="0" cellpadding="2"
	 cellspacing="5" align="center">
	 <th class="thead-dark" colspan="2" align="center">Edit Recipe Info</th>
		<form name="regform" method="post" action="recipeEditProcess.php">
			<tr><td>Recipe Name</td>
			<td><input class="form-control"maxlength="64" name="rname" required="required" value = "<?php echo $rName; ?>" placeholder=""></td></tr>
			<tr><td>Cooking Time</td>
			<td><input class="form-control" maxlength="64" name="rcooktime" required="required" value = "<?php echo $rCookingTime; ?>" placeholder=""></td></tr>
			<tr><td>Prep Time</td>
			<td><input class="form-control" type="number" maxlength="5" name="rpreptime" required="required" value = "<?php echo $rPrepTime; ?>" placeholder=""></td></tr>
			<tr><td>Servings</td>
			<td><input class="form-control" type="number" maxlength="10" name="rservings" value = "<?php echo $rServings; ?>" required="required" placeholder=""></td></tr>
			<tr><td colspan="2" align="center"><input type="submit" 
			name="submit_button" value="Edit Info"></td></tr>
		</form>
	</table>
</body>
</html>