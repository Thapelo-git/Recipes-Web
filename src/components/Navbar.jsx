import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link, useLocation } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { MdFavorite, MdClose } from 'react-icons/md';
import Logo from '/assets/vegan-huggs-logo-retina.png';
import { useTheme } from '../contexts/ThemeContext';

function Navbar({ menuOpen, setMenuOpen }) {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isFavorites = pathname === '/favorites';
  const [animationData, setAnimationData] = useState(null);

  const isLight = theme === 'light';
  
  // Theme-aware tokens for a premium Glassmorphism-style feel
  const bgClass = isLight ? 'bg-white/95 border-r border-neutral-200 shadow-sm' : 'bg-[#0f0f11]/95 border-r border-neutral-800 shadow-xl shadow-black/50';
  const textClass = isLight ? 'text-neutral-800' : 'text-neutral-200';
  const textMuted = isLight ? 'text-neutral-500' : 'text-neutral-400';
  const hoverBgClass = isLight ? 'hover:bg-orange-50' : 'hover:bg-neutral-800/60';

  useEffect(() => {
    fetch("/assets/Chef.json")
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch((e) => console.log('Animation failed to load', e));
  }, []);

  const NavItem = ({ to, isActive, icon: Icon, label }) => {
    return (
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className={`flex items-center w-full px-5 py-3.5 rounded-2xl transition-all duration-300 font-medium group ${
          isActive
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
            : `${hoverBgClass} ${textMuted} hover:text-orange-500`
        }`}
      >
        <span className={`flex items-center justify-center w-10 h-10 rounded-xl mr-3 transition-colors duration-300 ${
           isActive ? 'bg-white/20' : isLight ? 'bg-neutral-100 group-hover:bg-orange-100/50' : 'bg-neutral-800/50 group-hover:bg-orange-500/10'
        }`}>
          <Icon className={`text-xl transition-transform duration-300 ${isActive ? 'scale-110 text-white' : 'group-hover:scale-110'}`} />
        </span>
        <span className={`text-[17px] tracking-wide ${isActive ? 'font-semibold' : ''}`}>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-hidden={!menuOpen}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-0 left-0 w-[85%] max-w-[320px] h-full shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col p-6 backdrop-blur-xl ${
            isLight ? 'bg-white/95' : 'bg-[#0f0f11]/95'
          } ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-10 mt-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="outline-none">
              <div className={`p-2 rounded-2xl ${!isLight ? 'bg-white' : ''} inline-block`}>
                <img 
                  src={Logo} 
                  alt='Logo' 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <button 
              onClick={() => setMenuOpen(false)} 
              className={`p-2 rounded-full ${hoverBgClass} transition-colors ${isLight ? 'bg-neutral-100' : 'bg-neutral-800'} outline-none focus:ring-2 focus:ring-orange-500/50`}
            >
              <MdClose className={`text-2xl ${textClass}`} />
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            <div className={`text-xs uppercase tracking-wider font-bold mb-2 pl-3 ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Main Menu
            </div>
            <NavItem to="/" isActive={isHome} icon={FaBook} label="Recipes" />
            <NavItem to="/favorites" isActive={isFavorites} icon={MdFavorite} label="Favorites" />
          </nav>

          {animationData && (
            <div className="mt-auto flex justify-center pb-8 opacity-90 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-[40px] opacity-20 dark:opacity-10 mix-blend-screen"></div>
                <Lottie animationData={animationData} loop={true} className='w-56 drop-shadow-2xl relative z-10' />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sidebar App-Style Planner */}
      <div className={`hidden md:flex flex-col w-[260px] lg:w-[280px] h-screen fixed top-0 left-0 z-40 transition-all duration-300 backdrop-blur-xl ${bgClass}`}>
        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden p-6">
          <Link to="/" className="flex justify-start mb-12 mt-6 group outline-none">
            <div className="relative transform transition-transform duration-500 group-hover:scale-105">
              <div className={`p-3 rounded-2xl shadow-sm ${!isLight ? 'bg-white/95 backdrop-blur-md' : 'bg-white border border-neutral-100'}`}>
                <img 
                  src={Logo} 
                  alt='Logo' 
                  className="w-40 object-contain relative z-10" 
                />
              </div>
            </div>
          </Link>
          
          <nav className="flex flex-col space-y-2 flex-1">
            <div className={`text-[11px] uppercase tracking-wider font-bold mb-3 pl-3 ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Dashboard
            </div>
            <NavItem to="/" isActive={isHome} icon={FaBook} label="Recipes" />
            <NavItem to="/favorites" isActive={isFavorites} icon={MdFavorite} label="Favorites" />
          </nav>
          
          {animationData && (
            <div className="mt-auto w-full flex justify-center pb-4 pt-10 relative pointer-events-none">
              <div className="absolute bottom-12 w-40 h-40 bg-orange-400 rounded-full blur-[50px] opacity-10 mix-blend-screen"></div>
              <Lottie animationData={animationData} loop={true} className='w-64 drop-shadow-2xl relative z-10 opacity-90' />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
