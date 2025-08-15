import React,{useState} from 'react'

function TagList({allTags,selectedTag,onTagselect}) {
 
  const [showAll, setShowAll] = useState(false);
  const MAX_VISIBLE = 6
  return (
    <div className="flex flex-wrap fixed items-center">
  {allTags.slice(0, MAX_VISIBLE).map((tag, i) => (
    <button
      key={i}
      onClick={() => onTagselect(tag)}
      className={`p-2 rounded-lg m-2 ${
        selectedTag === tag ? 'bg-black text-white' : 'bg-white text-gray-400 border-2 border-gray-200'
      }`}
    >
      {tag}
    </button>
  ))}

  {allTags.length > MAX_VISIBLE && (
    <div className="relative m-2">
      <input
      placeholder={showAll ? 'Hide' : (selectedTag || 'View more')}
        onClick={() => setShowAll(prev => !prev)}
        className="p-2 rounded-lg border-b-1 border-gray-200"
      />
        
     

      {showAll && (
        <div className="absolute mt-2 p-2 bg-white border rounded shadow-lg z-10">
          {allTags.slice(MAX_VISIBLE).map((tag, i) => (
            <button
              key={i}
              onClick={() => {
                onTagselect(tag );
                setShowAll(false);
              }}
              className={`block w-full text-left p-2 rounded ${
               selectedTag === tag  ? 'bg-black text-white' : 'bg-white text-gray-400'
              }`}
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
