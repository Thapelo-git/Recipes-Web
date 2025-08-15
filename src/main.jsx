import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import Search from './components/Search.jsx'
import { SearchProvider } from './components/SearchContext.jsx'
import { RecipesProvider } from './components/RecipesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipesProvider>
    <SearchProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </SearchProvider>
    </RecipesProvider>
  </StrictMode>,
)
