import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function RecipeCard({recipes,selectedTag}) {
  const navigate = useNavigate()
 const filteredRecipes = selectedTag
 ?recipes.filter(recipe =>
  recipe.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
): recipes;


  return (
    <div className='overflow-x-auto snap-x snap-mandatory flex flex-row
     justify-center items-center scrollbar-hide  gap-4  '>
        {
            filteredRecipes.map((recipe, index) => (
              
                <div key={index} onClick={() => navigate(`/recipeDetails/${recipe.title}`)} 
                className='snap-center snap-always bg-white  p-4 rounded-xl h-90 w-80 gap-4 flex flex-col items-center '>
                 <div className='h-58 w-48 relative'>
                  <img src={recipe.image}  className='h-48 w-38 rounded-xl absolute top-0  shadow' />  
                  </div> 
                    <h1 className='text-black'>{recipe.title}</h1>
                    <hr className='border-1 border-gray-200 w-full'/>
                     <div className='flex flex-row justify-between items-center w-full b-0'>
                    <div className={`flex justify-center h-6 rounded-lg ${recipe.difficulty === 'easy' ? 'bg-red-200':'bg-orange-200'}`}>
                      <p className='text-white text-sm'>{`${recipe.difficulty === 'easy' ? 'easy':'medium'}`}</p></div>
                      <FaRegHeart className='text-gray-400'/>
                  </div>
                </div>
            ))
        }
    
    </div>
  )
}

export default RecipeCard
