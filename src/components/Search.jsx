import React from 'react'
import { useSearch } from './SearchContext'
import { useRecipes } from './RecipesContext'
import { useNavigate } from 'react-router-dom'
import FilteredRecipes from './FilteredRecipes';
import { useTheme } from './ThemeContext';
function Search() {
    const navigate = useNavigate();
    const {recipes}=useRecipes()
    const { theme } = useTheme();
    const {searchQuery,setSearchQuery} =useSearch();
    const filtered = searchQuery
    ? recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        // recipe.tags.join('').toLowerCase().includes(searchQuery.toLowerCase()) &&
        recipe.ingredients.some(ing =>
            ing.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];
const filteredIds = filtered.map(r=>r.id)
 const bgColor = theme === 'light'?"bg-black":"bg-white/5  backdrop-invert backdrop-opacity-10"
 const textColor = theme === 'light'?"text-white":"text-black"
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex justify-center items-start p-4 z-50">
      <div className={`${bgColor} p-4 rounded-lg w-full max-w-md`} >
        <button
          onClick={() => navigate(-1)}
          className={`${textColor} text-right w-full`}
        >
          Close
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search recipes..."
          className={`${textColor}  ${theme === "light"
      ? "placeholder-gray-500 text-black"
      : "placeholder-gray-300 text-white bg-gray-500"} w-full p-2 border rounded mb-4`}
        />
        {searchQuery && filtered.length === 0 && (
          <div className={`${textColor} `}>No recipes found.</div>
        )}
        <ul className={` ${theme?'bg-white/5  backdrop-invert backdrop-opacity-10':'bg-white'} `}>
          {filtered.map(recipe => (
            <li key={recipe.id} onClick={() => navigate(`/filtered/${filteredIds.join(',')}`)}
             className="p-2 flex flex-row gap-8 border-b">
               <img src={recipe.image}  className='shadow-lg h-16 w-16 rounded-full'/>
              <div className={`${textColor} flex flex-col gap-4 items-center justify-center`}>
                {recipe.title}
               <p className='text-gray-400'>{recipe.dietary}</p>
              
              </div>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Search
