// #############################################################################
// ################################## Imports ##################################
// #############################################################################

// node modules
import React, { Component } from "react";
import BaseLayout from "./BaseLayout";

// local imports
import {RecipeWorker} from "./api";


// #############################################################################
// ################################ Dummy Data #################################
// #############################################################################

// dummy data for setting things up at the moment
import dummyRecipes from "./DummyRecipes"


// #############################################################################
// ################################ Main Export ################################
// #############################################################################

class App extends Component {

  // constructor
  constructor(props) {
    // call to super
    super(props);
    // initialize state
    this.state = { 
      recipeData: {},
      filteredRecipes: {},
      recipeFilters: {}
    };
    // bind component methods
    this.getRecipes = this.getRecipes.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.extractRecipe = this.extractRecipe.bind(this);
  }

  // // filter recipes
  // let filteredRecipes;
  // if (Object.keys(recipeFilters) === 0) {
  //   filteredRecipes = recipeData;
  // } else {
    
  // }

  // function for grabbing recipes from backend
  async getRecipes() {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    const recipes = await worker.getRecipes();
    console.log(recipes);
    // set recipes to response
    this.setState((prevState) => {
      // filter recipes
      let newRecipes = {};
      if (Object.keys(prevState.recipeFilters).length === 0) {
        newRecipes = recipes;
      } else {
        Object.keys(prevState.recipeFilters).forEach(key => {
          if (recipes[key] !== undefined) {
            newRecipes[key] = recipes[key];
          }
        });
      }
      console.log(newRecipes);
      return {
        recipeData: recipes,
        filteredRecipes: newRecipes,
      };
    });
  }

  // function for creating a new recipe
  async createRecipe(newRecipe) {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    await worker.createRecipe(newRecipe);
    this.getRecipes();
  }

  // function for editing an existing recipe
  async editRecipe(newRecipe) {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    await worker.editRecipe(newRecipe);
    this.getRecipes();
  }

  // function for deleting an existing recipe
  async deleteRecipe(recipeID) {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    await worker.deleteRecipe(recipeID);
    this.getRecipes();
  }

  // function for searching recipes
  async searchRecipes(searchString) {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    const recipeIDs = await worker.searchRecipes(searchString);
    // filter recipes to those with the given IDs
    this.setState((prevState) => {
      const newRecipes = {};
      Object.keys(recipeIDs).forEach(key => {
        if (prevState.recipeData[key] !== undefined) {
          newRecipes[key] = prevState.recipeData[key];
        }
      })
      // set state
      return {
        filteredRecipes: newRecipes,
        recipeFilters: recipeIDs,
      };
    });
  }

  // clear search
  clearSearch() {
    this.setState((prevState) => ({
      filteredRecipes: prevState.recipeData,
      recipeFilters: {},
    }));
  }

  // function for grabbing recipes from backend
  async extractRecipe(url) {
    // create new worker for creating the recipe
    const worker = new RecipeWorker();
    // create the recipe
    const extractedRecipe = await worker.extractRecipe(url);
    // if extraction fails
    if (extractedRecipe.rName === "Not a Valid Website!") {
      console.log("Invalid website")
      return "error";
    }
    // else if successful, then create new recipe
    else {
      console.log(extractedRecipe);
      await worker.createRecipe(extractedRecipe);
      this.getRecipes();
      return "success";
    }
  }

  // initialize state of webpage (just uses dummy data right now, but should
  // make calls to API in future to get recipe data, etc.)
  componentDidMount() {
    // this.setState({recipeData: dummyRecipes});
    this.getRecipes();
  }


  // render app
  render() {
    return (
      <div>
        <BaseLayout 
          recipeData = {this.state.filteredRecipes}
          createRecipe = {this.createRecipe}
          editRecipe = {this.editRecipe}
          deleteRecipe = {this.deleteRecipe}
          searchRecipes = {this.searchRecipes}
          clearSearch = {this.clearSearch}
          extractRecipe = {this.extractRecipe}
        />
      </div>
    );
  }
}

export default App;