import React from 'react'
import { useRecipes } from '../contexts/RecipesContext'
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom'
function FilteredRecipes() {
    const {ids}= useParams()
    const {recipes}=useRecipes()
    const matchedRecipes = recipes.filter(r => ids.includes(r.id));
     const navigate = useNavigate();
  return (
    <div>
          <div className='w-full h-8 flex justify-end items-end '>
        <p className='text-sm text-orange-400 cursor-pointer'
        onClick={() => navigate('/')}
        >Clear Search</p>
      </div>
        <RecipeCard recipes={matchedRecipes} />
     
      {matchedRecipes.length === 0 && (
        <p className="text-gray-500">Novbbb recipes found.</p>
      )}
    </div>
  )
}

export default FilteredRecipes
