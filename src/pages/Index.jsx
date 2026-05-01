import { useState } from "react";
import { useRecipes } from "../contexts/RecipesContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import TagList from "../components/TagList";
const RECIPES_PER_PAGE = 4;

const Index = () => {
    const allTags = ['All','Vegetarian', 'Grill', 'Protein', 'Salad', 'Quick', 'Fresh', 'Breakfast','seafood',
      'vegan','low-carb','bowl','lunch','comfort','side','healthy'
    ];
    
    const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { recipes } = useRecipes();
  
const filteredRecipes =
    selectedTag && selectedTag !== "All" 
      ? recipes.filter((recipe) =>
          recipe.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase(),
          ),
        )
      : recipes;
  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);
  const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, startIndex + RECIPES_PER_PAGE);
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-display text-foreground">Recipes</h1>
          <p className="text-muted-foreground mt-1">{recipes.length} delicious recipes to explore</p>
           <div className='  p-4  justify-start items-start   '>
   
    <TagList allTags={allTags} selectedTag={selectedTag} onTagselect={setSelectedTag}/>
             </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id}  recipe={recipe} />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Index;
