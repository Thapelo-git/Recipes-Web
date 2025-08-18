import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipes } from './RecipesContext'
//import salad from '../images/salad.jpg'
import gradient from '/assets/gradient.jpg'

import { IoMdStarHalf } from 'react-icons/io';
import { IoArrowBackSharp, IoStarSharp, IoTimeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'
import {useFavorites} from './FAvoritesContext'
import { FaCircle, FaHeart } from 'react-icons/fa'
//https://dribbble.com/shots/23548096-Food-Website
function RecipeDetails() {
    const {id} =useParams()
    const {recipes} = useRecipes()
    const navigate = useNavigate();
    const [item,setItem]=useState(null)
    useEffect(()=>{
        const Details = recipes.find(r=>r.id === id)
    setItem(Details)
    },[id,recipes])
    
      const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const fav = isFavorite(id);

    if(!item){
        return <div>
            Item not found
        </div>
    }
    const colors = [
  
  "bg-green-100",
  "bg-blue-100",
  
  "bg-purple-100",
  "bg-pink-100",
];
 const dietaryColors = [
  
  "bg-purple-400",
  "bg-pink-400",
  "bg-green-400",
  "bg-blue-400",

];
  return (
    <div className=' p-4 h-screen w-full 'style={{ backgroundImage: `url(${gradient})` }}>
      <div className='flex justify-between items-center h-16 '>
    <button
          onClick={() => navigate(-1)}
          className="text-right "
        >
          <IoArrowBackSharp/>
        </button>
        
       <h2 className=' text-2xl text-amber-700'>{item.title}</h2>
       
        <div className='flex justify-center items-center bg-gray-200 rounded-full p-2'>
                       <button
            onClick={() => {
              if (fav) {
                removeFavorite(id);
               
              } else {
                addFavorite(id);
        
              }
            }}
          >
            <FaHeart className={`${fav ? ' text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>
        </div>
      <div className='md:flex md:justify-between md:items-center  gap-2'>
      <div className='md:order-2 flex justify-center   h-full'>
      
                   <img src={item.image} className=' md:max-w-[400px] shadow-xl/30'/>

                </div>
           

     
       <div className=" relative md:order-1  p-4 flex flex-col justify-center items-center bg-white/30 rounded-xl backdrop-invert backdrop-opacity-10
        h-full inset-y-0 left-0 gap-4">
        
       <div className="flex flex-row items-center mt-2 self-start">
        <p className=' text-orange-400  left-0  italic text-lg'>nutrition</p>
        </div>
       <div className='bg-gray-200 gap-6 flex flex-row p-2 rounded-lg'>
  {
    Object.entries(item.nutrition).map(([key, value]) => (
        <div key={key} className='flex justify-center items-center flex-col gap-2 w-18 '>
          <p className='font-medium'>{value}</p>
          <p className='text-gray-400'>{key}</p>
        </div>
      ))
    
  }
  
</div>
     <div className=' gap-6 flex flex-row p-4'>
  {
    item.ingredients.map(( value,index) => (
        <div
      key={index}
      className={`flex justify-center items-center flex-col gap-2 w-20 p-4 rounded-lg ${colors[index % colors.length]}`}
    >
      <p className="font-medium">{value.name}</p>
      <p className="text-gray-600">{value.quantity}</p>
    </div>
      ))
    
  }
  
</div>
<div>
  <div className="flex flex-row items-center mt-2 self-start">
        <p className=' text-orange-400  left-0  italic text-lg'>Steps</p>
        </div>
  
  <p className='text-amber-700'>{item.steps}</p>
</div>
      
        <div className='flex flex-row'>
       {
    item.tags.map(( value,index) => (
        <div
      key={index}
      className={'flex justify-center items-center flex-col   p-4 '}
    >
      <div className='flex flex-row gap-2 items-center'>
      <FaCircle  className='text-gray-100 size-3'/>
      <p className="font-medium text-gray-400">{value}</p>
      </div>
      
    </div>
      ))
    
  }
     </div>
      <div className='flex flex-row  mt-2 self-start'>
       {
    item.dietary.map(( value,index) => (
        <div
      key={index}
      className={`flex justify-center items-center   p-3 rounded-full ${dietaryColors[index % dietaryColors.length]}`}
    >
      <p className="font-medium text-gray-200">{value}</p>
     
    </div>
      ))
    
  }
     </div>
      <div className='flex flex-row justify-between items-center gap-6 w-full '>
        <p className='text-amber-700'>Servings {item.servings}</p>
       <div className='flex flex-row justify-center text-sm items-center gap-1'>
                               <IoTimeOutline/> <p>{item.timeMinutes} minutes</p>
                             </div>
        <div className='flex flex-row justify-center text-sm items-center gap-1s'>
                               <IoStarSharp className='text-orange-400'/><IoMdStarHalf className='text-orange-400'/>
                               <p>{item.rating} </p>
                             </div>
            <p className={`text-lg italic ${item.difficulty === 'easy' ? 'text-green-400':'text-orange-200'}`}>{`${item.difficulty === 'easy' ? 'easy':'medium'}`}</p>
       </div>
       </div>
    
    </div>
    </div>
  
//       <div className='relative bg-cover bg-center h-screen w-full ' style={{ backgroundImage: `url(${salad})` }}>
//         <div className="absolute bg-white/30 backdrop-invert backdrop-opacity-10 top-0 right-0 size-48 ">03</div>
//   <div className="bg-white/30 backdrop-invert backdrop-opacity-10 h-screen w-48 inset-y-0 left-0"></div>
//    <div class="absolute bg-white/30 backdrop-invert backdrop-opacity-10 right-0 bottom-0 size-48 ">09</div>
// </div>
      
   
  )
}

export default RecipeDetails
