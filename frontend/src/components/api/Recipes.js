// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import axios from 'axios';

// api configuration
import config from "./config";
import extractor_config from "./extractor_config";


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

// this is the worker class that makes all the api calls
export default class RecipeWorker {

  // get recipes
  async getRecipes() {
    const path = "/getRecipes.php"
    console.log(`Client - GET ${path}:`);
    const response = await axios.get(
      config.serverAddress + path
    );
    console.log(`Client - GET ${path}: response = ${response.data}`);
    return response.data;
  }

  // create new recipe
  async createRecipe(newRecipe) {
    const path = "/addCustomRecipeAPI.php"
    console.log(`Client - POST ${path}: recipe = ${newRecipe}`);
    const response = await axios.post(
      config.serverAddress + path,
      newRecipe,
    );
    console.log(`Client - POST ${path}: response = ${response}`);
  }

  // edit existing recipe
  async editRecipe(newRecipe) {
    const path = "/editRecipeAPI.php"
    console.log(`Client - POST ${path}: recipe = ${newRecipe}`);
    const response = await axios.post(
      config.serverAddress + path,
      newRecipe,
    );
    console.log(`Client - POST ${path}: response = ${response}`);
  }

  // delete existing recipe
  async deleteRecipe(recipeID) {
    const path = "/deleteRecipeAPI.php"
    console.log(`Client - POST ${path}: recipeID = ${recipeID}`);
    const response = await axios.delete(
      config.serverAddress + path,
      {data: {
        rID: recipeID}
      },
    );
    console.log(`Client - POST ${path}: response = ${response}`);
  }

  // search recipes
  async searchRecipes(searchString) {
    const path = "/recipeSearch.php"
    console.log(`Client - POST ${path}: search = ${searchString}`);
    const response = await axios.post(
      config.serverAddress + path,
      {searchTerm: searchString},
    );
    console.log(`Client - POST ${path}: response = ${response}`);
    return response.data;
  }

  // extract recipe
  async extractRecipe(url) {
    const path = "food/" + url
    console.log(extractor_config.serverAddress + path);
    console.log(`Client - GET ${path}:`);
    const response = await axios.get(
      extractor_config.serverAddress + path
    );
    console.log(`Client - GET ${path}: response = ${response.data}`);
    return response.data;
  }

}