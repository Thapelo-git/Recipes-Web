import React from 'react'
import { useRecipes } from './RecipesContext'
import { useParams } from 'react-router-dom';
function FilteredRecipes() {
    const {ids}= useParams()
    const {recipes}=useRecipes()
    const matchedRecipes = recipes.filter(r => ids.includes(r.id));
    
  return (
    <div>
      {matchedRecipes.map(recipe => (
        <div key={recipe.id} className="p-2 border-b">
          <h3 className="font-semibold">{recipe.title}</h3>
         
        </div>
      ))}
      {matchedRecipes.length === 0 && (
        <p className="text-gray-500">No recipes found.</p>
      )}
    </div>
  )
}

export default FilteredRecipes
