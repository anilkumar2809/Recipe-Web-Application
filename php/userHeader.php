	<!--Style sheets-->
	<link rel="stylesheet" href="../css/navbar.css">
	 <link rel="stylesheet" href="../css/style.css">
	 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script type="text/javascript" src="../js/jquery.js"></script>
    <div id="root"></div>
	<?php
	include 'apiCaller.php';
	include 'configPath.php';
	?>
	 <h1>
		 <nav>
			 <div class='navbar'>
				 <span><a ID ="customRecipeLink" href="<?php echo $path;?>/php/addCustomRecipe.php"><Big>Add Custom Recipe</Big></a><span>
					 <span><a ID ="URLRecipeLink" href="<?php echo $path;?>/php/addUrlRecipe.php"><Big>Add Recipe From URL</Big></a></span>
					 <span><a ID ="allRecipesLink" href="<?php echo $path;?>/php/viewRecipes.php"><Big>View All Recipes</Big></a></span>
				 </div>
			 </nav>
		 </h1>
		 <br />
		 <br />
