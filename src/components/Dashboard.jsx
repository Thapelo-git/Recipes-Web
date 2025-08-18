import React,{useState} from 'react'
//https://dribbble.com/shots/20994352-Chef-Website-Design
import Header from './Header'
import RecipeCard from './RecipeCard'
import Navbar from './Navbar'
import TagList from './TagList'
import { useRecipes } from './RecipesContext'
function Dashboard() {
  const {recipes}=useRecipes()
const allTags = ['Vegetarian', 'Grill', 'Protein', 'Salad', 'Quick', 'Fresh', 'Breakfast','seafood',
  'vegan','low-carb','bowl','lunch','comfort','side','healthy'
];

const [selectedTag, setSelectedTag] = useState(null);


  return (
<>
    <div className='  p-4 flex   justify-start items-start   '>
   
    <TagList allTags={allTags} selectedTag={selectedTag} onTagselect={setSelectedTag}/>
             </div>
<div className='py-32 '>
       {
      recipes.length > 0 ? <RecipeCard recipes={recipes} selectedTag={selectedTag}/>:'No Recipes To Show'
     }
   
 
    </div>
    </>
  )
}

export default Dashboard
