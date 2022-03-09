USE recipedat;

DROP TABLE IF EXISTS recipeSteps;
DROP TABLE IF EXISTS recipeIng;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    rID            INT NOT NULL AUTO_INCREMENT,
    rName          VARCHAR(500),
	rCookingTime   INT,
	rPrepTime      INT,
	rServings      INT,
    primary key(rID)
) ENGINE=INNODB;

CREATE TABLE recipeSteps (
	sID            INT NOT NULL AUTO_INCREMENT,
	rID            INT,
    sNum           INT,
	sText          VARCHAR(2000),
    primary key (sID),
	foreign key (rID) REFERENCES recipes(rID)
) ENGINE=INNODB;

CREATE TABLE recipeIng (
	iID           INT NOT NULL AUTO_INCREMENT,
	rID           INT,
	iName         VARCHAR(500),
	primary key (iID),
	foreign key (rID) REFERENCES recipes(rID)
) ENGINE=INNODB;

ALTER TABLE recipes AUTO_INCREMENT = 100;
ALTER TABLE recipeSteps AUTO_INCREMENT = 1000;
ALTER TABLE recipeIng AUTO_INCREMENT = 5000;

INSERT INTO recipes (rName, rCookingTime, rPrepTime, rServings)
  VALUES ("White Rice",30,10,4);
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,1,"Put vegetable oil in a pot on medium heat.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,2,"Add rice, mixing with spoon until oil is evenly dispersed, and increase to medium-high heat.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,3,"Cook rice for about 7 minutes, or until half the rice kernels have turned white.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,4,"Add water to pot and heat to a boil.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,5,"Boil for about 10 minutes, or until the water level is just above the rice level.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,6,"Cover pot, reduce to low heat, and allow rice to steam for 20 minutes.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (100,7,"Turn off heat. Rice can be served from pot.");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (100,"1/2 Tbsp vegetable oil");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (100,"1 cup white rice");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (100,"1 1/2 cups water");



INSERT INTO recipes (rName, rCookingTime, rPrepTime, rServings)
  VALUES ("Baked Chicken Breasts",15,20,4);
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,1,"Brine the chicken. To brine your chicken breasts, fill a large bowl with 1 quart of warm water and 1/4 cup kosher salt.  Stir to combine until most of the salt is absorbed.  Add the chicken breasts and let them sit in the mixture to brine for 15 minutes.  Or you can also also cover the bowl and refrigerate for up to 6 hours.  Remove the chicken breasts from the brine, rinse them with cold water, then pat them dry with some paper towels.  (However, if the chicken breasts you purchased have already been pre-brined in a sodium solution, skip this step.)");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,2,"Heat the oven. Preheat oven to 450°F.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,3,"Season the chicken. Place the chicken breasts in a single layer in a large baking dish*.  Brush on both sides (turning once) evenly with the melted butter or olive oil.  In a separate small bowl, whisk the salt, pepper, garlic powder and paprika until combined.  Then sprinkle the mixture evenly over the chicken on both sides.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,4,"Bake for 15-18* minutes, or until the chicken is cooked through and no longer pink.  Cooking time will depend on the thickness of the chicken breasts, so I recommend using a cooking thermometer to know exactly when it is fully cooked.  The thickest part of the breast, it should be 165°F.  (Or, if you want the chicken to be a little bit browned and crispier on top, you can turn the broiler on high for the final 3-5 minutes and broil the chicken until it is cooked through and golden on top.  Keep a close eye on the chicken so that it does not overcook and/or burn.)");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,5,"Once the chicken is cooked, remove the pan from the oven, transfer the chicken to a clean plate, and loosely tent the plate with aluminum foil.  Let the chicken rest for at least 5-10 minutes.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (101,6,"Serve warm.  Or, refrigerate in a sealed container for up to 3 days, or freeze for up to 3 months.");

INSERT INTO recipeIng (rID, iName)
  VALUES (101,"4 boneless skinless chicken breasts, pounded to even thickness and brined in saltwater (*see easy instructions below)");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (101,"1 Tablespoon melted butter or olive oil");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (101,"1 teaspoon kosher salt");



INSERT INTO recipes (rName, rCookingTime, rPrepTime, rServings)
  VALUES ("Fried Calamari",15,10,4);
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,1,"Place the calamari in a bowl with the buttermilk and stir to combine.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,2,"Cover the bowl and refrigerate for at least 30 minutes.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,3,"Heat 3-4 inches of oil in a large deep pot to 375 degrees F.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,4,"Place the flour, salt, paprika, pepper and garlic powder in a medium bowl; stir to combine.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,5,"Remove each piece of squid from the buttermilk and dredge in the flour. Repeat the process until all pieces are coated.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,6,"Place 8-10 pieces of squid in the oil. Cook for 2-3 minutes or until golden brown.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,7,"Remove the squid from the oil and drain on paper towels. Repeat the process with the remaining squid.");
  
INSERT INTO recipeSteps (rID, sNum, sText)
  VALUES (102,8,"Sprinkle additional salt over the squid if desired, and sprinkle with chopped parsley. Serve immediately.");

INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1 pound calamari rings and tentacles");

INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1 cup buttermilk");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1 1/2 cups all purpose flour");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"2 teaspoons salt plus more for serving");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1/2 teaspoon paprika smoked or regular");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1/4 teaspoon pepper");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"1/4 teaspoon garlic powder");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"vegetable oil for frying");
  
INSERT INTO recipeIng (rID, iName)
  VALUES (102,"2 teaspoons chopped fresh parsley");
  

COMMIT;