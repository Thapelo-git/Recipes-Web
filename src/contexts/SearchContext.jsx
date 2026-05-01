
import React, { createContext, useState, useContext,useEffect,useRef,useCallback,useMemo  } from 'react';
import { useRecipes } from './RecipesContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  //const [searchQuery, setSearchQuery] = useState('');
   const [search, setSearch] = useState("")
    const searchRef = useRef(null);      
    const debounceRef = useRef(null);
    const {recipes}  = useRecipes();
    useEffect(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }, []);
    const onSearchChange = useCallback((e) => {
      const value = e.target.value;
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        setSearch(value);
      }, 300);
    }, []);
    const filtered = useMemo(() => {
      const normalizedSearch = search.trim().toLowerCase();
      if (!normalizedSearch) return recipes;

      return recipes.filter(recipe => {
        const titleMatches = recipe.title.toLowerCase().includes(normalizedSearch);
        const ingredientMatches = recipe.ingredients.some(ing =>
          ing.name.toLowerCase().includes(normalizedSearch)
        );
        const tagMatches = recipe.tags?.some(tag =>
          tag.toLowerCase().includes(normalizedSearch)
        );
        const dietaryMatches = recipe.dietary?.some(item =>
          item.toLowerCase().includes(normalizedSearch)
        );

        return titleMatches || ingredientMatches || tagMatches || dietaryMatches;
      });
    }, [recipes, search]);
  //   return recipes.filter((recipe) => {
  //     const matchesSearch = recipe.name
  //       .toLowerCase()
  //       .includes(search.toLowerCase());

      

  //     return matchesSearch 
  //   });
  // }, [recipes, search]);
  return (
    <SearchContext.Provider value={{
      showSearch,
      setShowSearch,
      search,
      setSearch,
      onSearchChange,
      searchRef,
      filtered
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
