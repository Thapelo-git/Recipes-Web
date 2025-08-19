import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoMdStarHalf } from 'react-icons/io';
import { IoStarSharp, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineStarOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {useFavorites} from './FAvoritesContext'
import { useTheme } from './ThemeContext';
function RecipeCard({recipes,selectedTag}) {
  const navigate = useNavigate()
  const { theme } = useTheme();
 const filteredRecipes = selectedTag
 ?recipes.filter(recipe =>
  recipe.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
): recipes;

  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  // const bgColor = theme === 'light'?"bg-white":"bg-black"
 const textColor = theme === 'light'?"text-black":"text-gray-400"
  return (
    <div className={`md:overflow-x-auto md:snap-x md:snap-mandatory 
    flex flex-col md:flex-row
     md:scrollbar-hide gap-6 p-6  w-full `}>
        {
            filteredRecipes.map((recipe, index) => {
                const fav = isFavorite(recipe.id);
                return (
                <div key={index} 
                className={`md:snap-center md:snap-always 
                ${theme === 'light' ?'bg-white':'bg-white/5  backdrop-invert backdrop-opacity-10'}  p-4 rounded-xl h-90 w-100  md:w-72  gap-3 flex flex-col items-center `}>
                 <div className='h-58 w-48 '>
                  <img src={recipe.image}  className='h-48 w-68 rounded-xl  top-0  shadow' />  
                  </div> 
                    <h1 className=' text-amber-700'>{recipe.title}</h1>
                    <div className='flex flex-row justify-between items-center w-full '>
                      <div className='flex flex-row justify-center text-sm items-center gap-1'>
                        <IoTimeOutline className={`${textColor}`}/> <p className={`${textColor}`}>{recipe.timeMinutes} minutes</p>
                      </div>
                      <div className='flex flex-row justify-center text-sm items-center gap-1s'>
                        <IoStarSharp className='text-orange-400'/><IoMdStarHalf className='text-orange-400'/>
                        <p className={`${textColor}`}>{recipe.rating} </p>
                      </div>
                      <p className={`text-sm italic ${recipe.difficulty === 'easy' ? 'text-green-400':'text-orange-400'}`}>{`${recipe.difficulty === 'easy' ? 'easy':'medium'}`}</p></div>
                    <hr className='border-1 border-gray-200 w-full'/>
                     <div className='flex flex-row justify-between items-center w-full b-0'>
                    <button onClick={() => navigate(`/recipeDetails/${recipe.id}`)}  className='text-white text-sm h-8 p-2 w-25 flex justify-center items-center bg-green-500 rounded-lg'>
                      View Recipes
                    </button>
                     <button
  onClick={() => {
    if (fav) {
      removeFavorite(recipe.id);
     
    } else {
      addFavorite(recipe.id);
    
     
    }
  }}
>
  <FaHeart className={`${fav ? ' text-red-500' : 'text-gray-400'}`} />
</button>
                  </div>
                </div>
            )})
        }
    
    </div>
  )
}

export default RecipeCard
