import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Users } from "lucide-react";
import { useState,useEffect } from "react";
import NutritionRing from "../components/NutritionRing";
import FlowerChart from "../components/FlowerChart";
import { Badge } from "../components/ui/badge";
import { useRecipes } from '../contexts/RecipesContext';
const CardDetails = () => {
  const { id } = useParams();
  const [recipe,setRecipe]=useState(null)
const {recipes} = useRecipes()
useEffect(()=>{
        const Details = recipes.find(r=>r.id === id)
    setRecipe(Details)
    },[id,recipes])
  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-display text-foreground mb-2">Recipe not found</h1>
          <Link to="/" className="text-primary underline">Back to recipes</Link>
        </div>
      </div>
    );
  }

  const cal = recipe.nutrition.calories;
  const protein = parseInt(recipe.nutrition.protein);
  const carbs = parseInt(recipe.nutrition.carbs);
  const fat = parseInt(recipe.nutrition.fat);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pt-4">
        <Link
          to="/"
          className="w-10 h-10 rounded-full bg-card shadow-[var(--card-shadow)] flex items-center justify-center text-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <div className="pt-4 pb-2">
        <FlowerChart ingredients={recipe.ingredients} image={recipe.image} title={recipe.title} />
      </div>

      <div className="text-center px-4 pb-4">
        <h1 className="text-2xl font-bold font-display text-foreground">{recipe.title}</h1>
        <p className="text-muted-foreground text-sm mt-1">{cal} cal</p>
        <div className="flex justify-center flex-wrap gap-2 mt-3">
          {recipe.dietary.map((d) => (
            <Badge key={d} variant="secondary" className="rounded-full text-xs px-3 py-1">
              {d}
            </Badge>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 space-y-5">
        <div className="bg-card rounded-2xl p-4 shadow-[var(--card-shadow)] flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{recipe.timeMinutes}m</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{recipe.rating}</span>
          </div>
          <Badge variant="outline" className="rounded-full text-[11px] capitalize">
            {recipe.difficulty}
          </Badge>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-[var(--card-shadow)]">
          <h2 className="text-lg font-bold font-display text-foreground mb-3">Ingredients</h2>
          {recipe.ingredients.map((ingredient, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <span className="text-sm font-semibold text-foreground">{ingredient.name}</span>
              <span className="text-sm text-muted-foreground">{ingredient.quantity}</span>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-[var(--card-shadow)]">
          <h2 className="text-lg font-bold font-display text-foreground mb-4">Nutrition</h2>
          <div className="flex justify-between items-center">
            <NutritionRing value={cal} label="calories" unit="" color="hsl(var(--primary))" max={700} />
            <NutritionRing value={protein} label="protein" unit="g" color="hsl(var(--nutrition-protein))" max={50} />
            <NutritionRing value={carbs} label="carbs" unit="g" color="hsl(var(--nutrition-carbs))" max={100} />
            <NutritionRing value={fat} label="fat" unit="g" color="hsl(var(--nutrition-fat))" max={30} />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-[var(--card-shadow)]">
          <h2 className="text-lg font-bold font-display text-foreground mb-4">Steps</h2>
          <div className="space-y-4">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-[var(--card-shadow)]">
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full text-xs px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
