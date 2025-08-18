import React from 'react'
import { useSearch } from './SearchContext'
import { useRecipes } from './RecipesContext'
import { useNavigate } from 'react-router-dom'
import FilteredRecipes from './FilteredRecipes';
function Search() {
    const navigate = useNavigate();
    const {recipes}=useRecipes()
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
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex justify-center items-start p-4 z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="text-right w-full"
        >
          Close
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search recipes..."
          className="w-full p-2 border rounded mb-4"
        />
        {searchQuery && filtered.length === 0 && (
          <div className="text-gray-500">No recipes found.</div>
        )}
        <ul>
          {filtered.map(recipe => (
            <li key={recipe.id} onClick={() => navigate(`/filtered/${filteredIds.join(',')}`)} className="p-2 border-b">
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Search
