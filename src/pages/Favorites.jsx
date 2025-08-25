import React from 'react'
import {useFavorites} from '../contexts/FAvoritesContext'
import { useRecipes } from '../contexts/RecipesContext'
import RecipeCard from '../components/RecipeCard';

import { Link } from 'react-router-dom';
function Favorites() {
  const {recipes}=useRecipes()
  const { favorites} = useFavorites();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
  return (
    <>
     {favoriteRecipes.length > 0 ? <RecipeCard recipes={favoriteRecipes}/>:<div className='flex justify-center items-center w-screen h-screen flex-col'>
      <p>No Favories</p>
      <Link to="/" className='text-white text-sm p-2 rounded-lg bg-green-400 '>Home</Link>
      </div> }  
  </>
  )
}

export default Favorites
