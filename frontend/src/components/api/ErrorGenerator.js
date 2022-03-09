// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import axios from 'axios';

// api configuration
import config from "./config";


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

// this is the worker class that makes all the api calls
export default class ErrorFlag {

  // create new recipe
  async createTask(url) {
    const path = "/createErrorMessage.php"
    console.log(`Client - POST ${path}: recipe = ${newRecipe}`);
    const response = await axios.post(
      config.serverAddress + path,
      url,
    );
    console.log(`Client - POST ${path}: response = ${response}`);
    return response.data;
  }

}