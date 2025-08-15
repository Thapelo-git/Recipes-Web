import React from 'react'
import './App.css'
//https://dribbble.com/shots/24052547-Coin-Sensei-Money-Tracker-App
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Favorites from './components/Favorites'


import Search from './components/Search'
import FilteredRecipes from './components/FilteredRecipes'
import RecipeDetails from './components/RecipeDetails'
function App() {


  return (
    <Router >
     <div className="md:w-[20%] bg-white fixed h-full">
    <Navbar  />
    </div>
      <Header />
      <div className='md:w-[80%] w-full md:h-[80%] h-screen  flex md:ml-[20%] p-4  overflow-x-auto scrollbar-hide'>
      <Routes >
         
        <Route path='/' Component={Dashboard}/>
         <Route path='/favorites' Component={Favorites}/>
         <Route path="/search" element={<Search />} />
         <Route path="/filtered/:ids" element={<FilteredRecipes/>} />
         <Route path="/recipeDetails/:title" element={<RecipeDetails/>} />
      </Routes>
      
          
    
      </div>
      
    </Router>
  )
}

export default App
