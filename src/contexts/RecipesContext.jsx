// RecipesContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch('/recipes.json');
      const data = await res.json();
      setRecipes(data.recipes);
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
