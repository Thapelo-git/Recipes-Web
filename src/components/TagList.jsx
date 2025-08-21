import React,{useState} from 'react'
import { useTheme } from '../contexts/ThemeContext';
function TagList({allTags,selectedTag,onTagselect}) {
 const { theme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const bgColor = theme === 'light'?"bg-white":"bg-black"
 const textColor = theme === 'light'?"text-black":"text-white"
const tagTheme =
  theme === "light"
    ? "bg-white text-gray-400 border-2 border-gray-200"
    : "bg-white/5 backdrop-invert backdrop-opacity-10 text-gray-400";
  const MAX_VISIBLE = 6
  return (
    <div className="flex absolute z-10 flex-wrap md:fixed items-center">
  {allTags.slice(0, MAX_VISIBLE).map((tag, i) => (
    <button
      key={i}
      onClick={() => onTagselect(tag)}
      className={`p-2 rounded-lg m-2 
         ${tagTheme}
        ${selectedTag === tag ?
  
               theme === "light"
                ? "ring-2 ring-orange-400"
                : "ring-2 ring-white"
              : ""
        }
        
      `}
    >
      {tag}
    </button>
  ))}

  {allTags.length > MAX_VISIBLE && (
    <div className={`${textColor} relative m-2`}>
      <input
      placeholder={showAll ? 'Hide' : (selectedTag || 'View more')}
        onClick={() => setShowAll(prev => !prev)}
        className={`p-2 rounded-lg border-b-1 border-gray-200 ${theme === "light"
      ? "placeholder-gray-500 text-black"
      : "placeholder-gray-300 text-white bg-white/5 backdrop-invert backdrop-opacity-10"}`}
      />
        
     

      {showAll && (
        <div className={`absolute mt-2 p-2 ${bgColor} border rounded shadow-lg z-10`}>
          {allTags.slice(MAX_VISIBLE).map((tag, i) => (
            <button
              key={i}
              onClick={() => {
                onTagselect(tag );
                setShowAll(false);
              }}
              className={`block w-full text-left p-2 rounded 
                
                ${selectedTag === tag ? "ring-2 ring-white":""}
              `}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  )}
</div>
  )
}

export default TagList
