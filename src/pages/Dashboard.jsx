import React,{useState} from 'react'
//https://dribbble.com/shots/20994352-Chef-Website-Design
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import Navbar from '../components/Navbar'
import TagList from '../components/TagList'
import { useRecipes } from '../contexts/RecipesContext'
function Dashboard() {
  const {recipes}=useRecipes()
const allTags = ['All','Vegetarian', 'Grill', 'Protein', 'Salad', 'Quick', 'Fresh', 'Breakfast','seafood',
  'vegan','low-carb','bowl','lunch','comfort','side','healthy'
];

const [selectedTag, setSelectedTag] = useState(null);


  return (
<div className='flex flex-col'>
    <div className='  p-4 flex relative  justify-start items-start   '>
   
    <TagList allTags={allTags} selectedTag={selectedTag} onTagselect={setSelectedTag}/>
             </div>
<div className='py-32 flex '>
       {
      recipes.length > 0 ? <RecipeCard recipes={recipes} selectedTag={selectedTag}/>:'No Recipes To Show'
     }
   
 
    </div>
    </div>
  )
}

export default Dashboard
