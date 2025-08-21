// FavoritesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });
 
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

 const addFavorite = id => {
  setFavorites(prev => {
    const updated = [...new Set([...prev, id])];
    localStorage.setItem('favorites', JSON.stringify(updated));
    return updated;
  });
};

const removeFavorite = id => {
  setFavorites(prev => {
    const updated = prev.filter(item => item !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
    return updated;
  });
};
  const isFavorite = id => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
};
