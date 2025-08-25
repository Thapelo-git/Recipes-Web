import React from 'react'
import { useSearch } from '../contexts/SearchContext'

import { useNavigate } from 'react-router-dom'
//import FilteredRecipes from './FilteredRecipes';
import { useTheme } from '../contexts/ThemeContext';
import { MdClose } from 'react-icons/md';
function Search() {
    const navigate = useNavigate();
    
    const { theme } = useTheme();
    const {search,onSearchChange,filtered,searchRef,setSearch} =useSearch();
    
   
//const filteredIds = filtered.map(r=>r.id)
 const bgColor = theme === 'light'?"bg-white":"bg-white/5  backdrop-invert backdrop-opacity-10"
 const textColor = theme === 'light'?"text-black":"text-white"
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
        <div className='w-full p-2 border rounded mb-4 flex flex-row justify-between'>
        <input
        ref={searchRef}
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder="Search recipes..."
          className={`${textColor}  ${theme === "light"
      ? "placeholder-gray-200 text-black"
      : "placeholder-gray-200 text-white "} w-full border-b`}
        />
             {search && (
    <button
      onClick={() => setSearch('')}
      className="px-3 py-2 text-sm rounded "
    >
      <MdClose size={18} className={`${theme === "light"
      ? " text-black"
      : " text-white "} `}/>
    </button>
  )}
        </div>
        {search && filtered.length === 0 && (
          <div className={`${textColor} `}>No recipes match your search</div>
        )}
  
        <ul className={` ${theme=='light'?'bg-white':'bg-white/5  backdrop-invert backdrop-opacity-10'} `}>
          {filtered.map(recipe => (
            <li key={recipe.id} onClick={() => navigate(`/filtered/${recipe.id}`)}
             className="p-2 flex flex-row gap-8 border-b">
               <img src={recipe.image}  className='shadow-lg h-16 w-16 rounded-full'/>
              <div className={`${textColor} flex flex-col gap-4 items-center justify-center`}>
                {recipe.title}
               <p className='text-gray-400'>{recipe.dietary.join(',')}</p>
              
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
