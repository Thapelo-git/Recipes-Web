import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaToggleOff } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { IoToggle, IoToggleOutline } from "react-icons/io5";
import Logo from '../assets/logo.png'
import { useTheme } from './ThemeContext';

import { useNavigate } from 'react-router-dom';
function Header({setMenuOpen}) {
 const { theme, toggleTheme } = useTheme();
  
  const navigate = useNavigate();

  return (
    <>
    
        <header className={`md:w-[90%] h-20 md:ml-[10%] p-2  md:p-4 flex  items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
         
          <div className='hidden md:flex items-center border border-gray-300 rounded-lg p-2 w-full max-w-md'>
            <input type="text" placeholder="Search recipes..." 
            className='flex-grow outline-none' 
            readOnly
               onClick={() => navigate("/search")}
            />
            <button onClick={() => navigate("/search")} className='text-xl text-gray-500'><FaSearch /></button>
             
          </div>
         
           <div className='md:hidden flex justify-between w-full mb-4 '>
             <Link to="/" className="text-black font-bold text-xl">
             <img src={Logo} alt='Logo' className='w-12 h-12' />
             </Link>
             <div className='flex flex-row items-center space-x-4'>
             
             
            
            <button onClick={() => navigate("/search")} className='text-xl '><FaSearch /></button>
            <button onClick={toggleTheme} className='text-xl '>
            {theme === 'light' ? <IoToggle className='text-2xl text-black' />: <FaToggleOff className='text-2xl' />}
         
          
            </button>
            <button onClick={() => setMenuOpen(true)} className='text-3xl '>
              <FaBars />
            </button>
            </div>
          </div>
        </header>  

   </>
  )
}

export default Header
