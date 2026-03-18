import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";

import Search from "./components/Search.jsx";
import FilteredRecipes from "./components/FilteredRecipes.jsx";

import Favorites from "./pages/Favorites.jsx";
import CardDetails from "./pages/CardDetails.jsx";
import Index from "./pages/Index.jsx";

import { useTheme } from "./contexts/ThemeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner.jsx";
import {
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar.jsx";

const queryClient = new QueryClient();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <SidebarProvider>
            <div
              className={`min-h-screen flex w-full ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {/* Sidebar */}
              <AppSidebar />

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                
                {/* Mobile Header */}
                <header className="h-12 flex items-center md:hidden border-b border-border">
                  <SidebarTrigger className="ml-2" />
                </header>

                {/* Navbar (side drawer style) */}
                <div
                  className={`relative md:w-[20%] w-screen fixed h-full ${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>

                {/* Top Header */}
                <Header setMenuOpen={setMenuOpen} />

                {/* Routes */}
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/filtered/:ids" element={<FilteredRecipes />} />
                    <Route path="/recipeDetails/:id" element={<CardDetails />} />
                  </Routes>
                </main>

              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;