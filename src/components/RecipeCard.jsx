import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoMdStarHalf } from 'react-icons/io';
import { IoStarSharp, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineStarOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {useFavorites} from './FAvoritesContext'
function RecipeCard({recipes,selectedTag}) {
  const navigate = useNavigate()
 const filteredRecipes = selectedTag
 ?recipes.filter(recipe =>
  recipe.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
): recipes;

  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  

  return (
    <div className='md:overflow-x-auto md:snap-x md:snap-mandatory md:flex md:flex-row
     justify-center items-center scrollbar-hide md:flex-nowrap  gap-4  '>
        {
            filteredRecipes.map((recipe, index) => {
                const fav = isFavorite(recipe.id);
                return (
                <div key={index} 
                className='md:snap-center md:snap-always bg-white  p-4 rounded-xl h-90 w-80 gap-4 flex flex-col items-center '>
                 <div className='h-58 w-48 relative'>
                  <img src={recipe.image}  className='h-48 w-38 rounded-xl absolute top-0  shadow' />  
                  </div> 
                    <h1 className='text-black'>{recipe.title}</h1>
                    <div className='flex flex-row justify-between items-center w-full '>
                      <div className='flex flex-row justify-center text-sm items-center gap-1'>
                        <IoTimeOutline/> <p>{recipe.timeMinutes} minutes</p>
                      </div>
                      <div className='flex flex-row justify-center text-sm items-center gap-1s'>
                        <IoStarSharp className='text-orange-400'/><IoMdStarHalf className='text-orange-400'/>
                        <p>{recipe.rating} </p>
                      </div>
                      <p className={`text-sm italic ${recipe.difficulty === 'easy' ? 'text-green-400':'text-orange-200'}`}>{`${recipe.difficulty === 'easy' ? 'easy':'medium'}`}</p></div>
                    <hr className='border-1 border-gray-200 w-full'/>
                     <div className='flex flex-row justify-between items-center w-full b-0'>
                    <button onClick={() => navigate(`/recipeDetails/${recipe.id}`)}  className='text-white text-sm h-8 p-2 w-25 flex justify-center items-center bg-green-500 rounded-lg'>
                      View Recipes
                    </button>
                     <button
  onClick={() => {
    if (fav) {
      removeFavorite(recipe.id);
     
      // const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
      // const updated = stored.filter(id => id !== recipe.id);
      // localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      addFavorite(recipe.id);
    
      // const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
      // if (!stored.includes(recipe.id)) {
      //   stored.push(recipe.id);
      //   localStorage.setItem('favorites', JSON.stringify(stored));
      // }
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
