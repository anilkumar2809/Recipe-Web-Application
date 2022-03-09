let dummyRecipes = [
  {rID: 1, rName: "Slammin' Pancakes", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 2, rName: "Momma's Apple Pie", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 3, rName: "Turd Sandwich", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 4, rName: "Tropical Smoothie", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 5, rName: "Spicy Chile", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 6, rName: "French Omellete", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 7, rName: "Roast Chicken", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 8, rName: "Pizza Lunchables", rCookingTime: 30, rPrepTime: 10, rServings: 4},
  {rID: 9, rName: "Bacon Cheeseburger", rCookingTime: 30, rPrepTime: 10, rServings: 4},
];

export const dummyIngredients = [
  {iID: 1, iName: "2 Tbs 100% Pure, Organic, Vegan, Non-GMO, Fat-Free, Reduced-Sodium, Virgin Mary Olive Oil"},
  {iID: 2, iName: "3 cups Salt"},
  {iID: 3, iName: "1 dash Frank's RedHot"},
  {iID: 4, iName: "1 heart full of Love"},
];

export const dummySteps = [
  {sID: 1, sNum: 1, sText: "Preheat the oven to 350 degrees Farenheit, or 176.667 degrees if you are a savage that uses Celsius."},
  {sID: 2, sNum: 2, sText: "Bring a large pot of sparkling water to a rolling boil."},
  {sID: 3, sNum: 3, sText: "Place the pot of boiling water in the oven."},
  {sID: 4, sNum: 4, sText: "Tell your bae that dinner will be ready in 15 or so."},
  {sID: 5, sNum: 5, sText: "Realize you have no idea why you put a pot of boiling water in the oven."},
  {sID: 6, sNum: 6, sText: "Realize you have no idea what you are doing."},
  {sID: 7, sNum: 7, sText: "The room is spinning and you are having a minor panic attack."},
  {sID: 8, sNum: 8, sText: "Take a seat and gather yourself."},
  {sID: 9, sNum: 9, sText: "Shut everything down and just order some Chipotle."},
  {sID: 10, sNum: 10, sText: "Put some Frank's RedHot on that shit."},
  {sID: 11, sNum: 11, sText: "Call your bae and tell them dinner's ready."},
  {sID: 12, sNum: 12, sText: "Post that shit to Instagram."},
];

for (let i = 0; i < dummyRecipes.length; i++) {
  Object.assign(dummyRecipes[i],{ingredients: dummyIngredients, steps: dummySteps})
}

export default dummyRecipes;