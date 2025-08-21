import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaToggleOff } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { IoToggle, IoToggleOutline } from "react-icons/io5";
import Logo from '/assets/vegan-huggs-logo-retina.png'
import { useTheme } from '../contexts/ThemeContext';

import { useNavigate } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
function Header({setMenuOpen}) {
 const { theme, toggleTheme } = useTheme();
  
  const navigate = useNavigate();

  return (
    <>
    
        <header className={`md:w-[90%] h-20 md:ml-[10%] p-2  md:p-4 flex  items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
         <div className='hidden md:flex gap-8 '>
          <div className=' flex items-center  border-2  border-orange-200 rounded-lg p-2 w-full max-w-md'>
            <input type="text" placeholder="Search recipes..." 
            className='flex-grow outline-none ' 
            readOnly
               onClick={() => navigate("/search")}
            />
            <button onClick={() => navigate("/search")} className='text-lg text-gray-400'><FaSearch /></button>
             
          </div>

          
         <button onClick={toggleTheme} className='text-xl '>
            {theme === 'light' ? <MdDarkMode className='text-2xl text-black' />: <MdDarkMode className='text-2xl text-white' />}
         
          
            </button>
            </div>
           <div className='md:hidden flex justify-between w-full mb-4 '>
             <Link to="/" className='bg-white/5 p-1 rounded-full backdrop-invert backdrop-opacity-5'>
             <img src={Logo} alt='Logo' className='w-22 h-14' />
             </Link>
             <div className='flex flex-row items-center space-x-4'>
             
             
            
            <button onClick={() => navigate("/search")} className='text-xl '><FaSearch /></button>
            <button onClick={toggleTheme} className='text-xl '>
            {theme === 'light' ? <MdDarkMode className='text-2xl text-black' />: <MdDarkMode className='text-2xl text-white' />}
         
          
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
