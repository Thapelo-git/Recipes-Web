import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipes } from './RecipesContext'

function RecipeDetails() {
    const {title} =useParams()
    const {recipes} = useRecipes()
    const [item,setItem]=useState(null)
    useEffect(()=>{
        const Details = recipes.find(r=>r.title === title)
    setItem(Details)
    },[title,recipes])
    

    if(!item){
        return <div>
            Item not found
        </div>
    }
  return (
    <div>
      <p>{item.title}</p>
    </div>
  )
}

export default RecipeDetails
