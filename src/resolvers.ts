import Auth from './Api/AuthRes';

export default {
  RootQuery: {
    user: Auth.user
  //  Recipes: Recipe.Recipes,
   // getSavedRecipes: SavedRecipes.getSavedRecipes
  },
  RootMutation: {
    login: Auth.login,

    createUser: Auth.createUser
   // CreateSavedRecipe: SavedRecipes.CreateSavedRecipe,
  //  deleteSavedRecipe: SavedRecipes.deleteSavedRecipe
  }
};
