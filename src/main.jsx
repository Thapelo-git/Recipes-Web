import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './contexts/FAvoritesContext.jsx'
import { RecipesProvider } from './contexts/RecipesContext.jsx'
import { SearchProvider } from './contexts/SearchContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
    <RecipesProvider>
    <SearchProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </SearchProvider>
    </RecipesProvider>
    </FavoritesProvider>
  </StrictMode>,
)
