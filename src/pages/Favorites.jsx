import React from "react";
import { useFavorites } from "../contexts/FavoriteContext";
import { useRecipes } from "../contexts/RecipesContext";
import RecipeCard from "../components/RecipeCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
function Favorites() {
  const { recipes } = useRecipes();
  const { favorites } = useFavorites();
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id),
  );
  return (
 <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-display text-foreground">Favorites</h1>
          <p className="text-muted-foreground mt-1">{favoriteRecipes.length} saved recipes</p>
        </div>
        {favoriteRecipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-lg font-medium text-muted-foreground">No favorites yet</p>
            <p className="text-sm text-muted-foreground/70 mt-1">Tap the heart on any recipe to save it here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
