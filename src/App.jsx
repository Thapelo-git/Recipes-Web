 import React ,{useState}from 'react'
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
import { useTheme } from './components/ThemeContext';
function App() {
 const  [menuOpen,setMenuOpen]=useState(false)
const { theme } = useTheme();
  return (
    <Router >
     <div className={`relative md:w-[20%] bg-white w-screen fixed h-full ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
    <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
      <Header setMenuOpen={setMenuOpen}/>
      <div className='md:w-[80%]  h-[70%]   flex md:ml-[20%]   overflow-x-auto scrollbar-hide'>
      <Routes >
         
        <Route path='/' element={<Dashboard />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path="/search" element={<Search />} />
         <Route path="/filtered/:ids" element={<FilteredRecipes/>} />
         <Route path="/recipeDetails/:id" element={<RecipeDetails/>} />
      </Routes>
      
          
    
      </div>
      
    </Router>
  )
}

export default App
