import React from 'react'
import Lottie from 'lottie-react'
import chef from '../assets/Chef (1).json'
import { Link } from 'react-router-dom'
import { FaBars, FaBook } from 'react-icons/fa'
import Logo from '../assets/vegan-huggs-logo-retina.png'
import { useLocation } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
function Navbar({ menuOpen, setMenuOpen }) {

  const {pathname} = useLocation();
  const isHome = pathname === '/';
  const isFavorites = pathname === '/favorites';
  return (
    <>
    {menuOpen ? (
  <div className="md:hidden absolute top-0 left-0 w-full  h-screen bg-white z-50 px-6 py-4">
    
    <div className="flex justify-start w-1/4 ">
      <button onClick={() => setMenuOpen(false)} className="text-3xl  text-black">
        &times; 
      </button>
    </div>

   
    <div className="flex flex-col mt-2 space-y-4 text-black ">
    <Link to="/" onClick={() => setMenuOpen(false)} className='cursor-pointer text-xl'>Recipes</Link>
     
      <Link to="/favorites" onClick={() => setMenuOpen(false)} className=" text-xl cursor-pointer">Favorites</Link>
    
    </div>
  </div>
):(
  <div className='hidden md:block w-[20%] bg-white h-screen fixed top-0 pt-10 left-0'>
 <nav className=' h-full bg-white flex flex-col items-center justify-between p-4 '>
      <div className='flex flex-col items-center justify-between h-full'>
        <Link to="/">
        <img src={Logo} alt='Logo' className='w-44 h-34 mb-4' />
        </Link>
        <div className='flex flex-col items-center space-y-8'>
        {
          isHome ?(
           <div className='w-44 h-10 flex flex-row items-center justify-center bg-orange-300 rounded-lg '>
            <FaBook className='text-l text-black mr-2 ' /> 
            <Link to="/" className='text-black text-lg'>Recipes</Link>
            
            
           </div>
          ) :(
             <div className='w-44 h-10 border-1 border-gray-300 flex flex-row items-center justify-center bg-white rounded-lg '>
            <FaBook className='text-l text-gray-300 mr-2 ' /> 
            <Link to="/" className='text-gray-300 text-lg'>Recipes</Link>
            
            
           </div>
          )
        }
        
        {
          isFavorites ? (
            <div className='w-44 h-10 flex items-center  justify-center  bg-orange-300 rounded-lg'>
          <MdFavorite className='text-l text-black mr-2' />
          <Link to="/favorites" className='text-black text-lg'>Favorites</Link>
          
        </div>
          ):(
            <div className='w-44 h-10 border-1 border-gray-300 flex flex-row items-center justify-center bg-white rounded-lg '>
            <FaBook className='text-l text-gray-300 mr-2 ' /> 
            <Link to="/favorites" className='text-gray-300 text-lg'>Favorites</Link>
            
            
           </div>
          )
        }
        
        </div>
         <div className="block md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      
           
      <div>
      <Lottie animationData={chef} loop={true} className='w-48 h-58' />
      </div>
      </div>
    </nav>
    </div>
)}
   
  
    </>
  )
}
export default Navbar
