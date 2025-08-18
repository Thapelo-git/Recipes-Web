import React from 'react'
import {useFavorites} from './FAvoritesContext'
import { useRecipes } from './RecipesContext'
import RecipeCard from './RecipeCard';
function Favorites() {
  const {recipes}=useRecipes()
  const { favorites} = useFavorites();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
  return (
    
      <RecipeCard recipes={favoriteRecipes} />
  
  )
}

export default Favorites
