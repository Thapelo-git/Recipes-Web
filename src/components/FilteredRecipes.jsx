import React from 'react'
import { useRecipes } from '../contexts/RecipesContext'
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
function FilteredRecipes() {
    const {ids}= useParams()
    const {recipes}=useRecipes()
    const matchedRecipes = recipes.filter(r => ids.includes(r.id));
    
  return (
    <div>
      
        <RecipeCard recipes={matchedRecipes} />
     
      {matchedRecipes.length === 0 && (
        <p className="text-gray-500">Novbbb recipes found.</p>
      )}
    </div>
  )
}

export default FilteredRecipes
