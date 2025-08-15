// RecipesContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch('http://localhost:5000/recipes');
      const data = await res.json();
      setRecipes(data);
    }
    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
