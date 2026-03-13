const petalColors = [
  "hsl(0, 70%, 80%)",
  "hsl(120, 45%, 75%)",
  "hsl(40, 55%, 78%)",
  "hsl(55, 70%, 78%)",
  "hsl(130, 50%, 70%)",
  "hsl(85, 50%, 75%)",
  "hsl(200, 50%, 75%)",
  "hsl(280, 40%, 78%)",
];

const FlowerChart = ({ ingredients, image, title }) => {
  const count = ingredients.length;

  // Generate even percentages for display
  const percentages = ingredients.map((_, i) => {
    const base = Math.floor(100 / count);
    return i === 0 ? 100 - base * (count - 1) : base;
  });

  const centerX = 50;
  const centerY = 50;
  const petalDistance = 28;

  const getPetalPosition = (index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * petalDistance,
      y: centerY + Math.sin(angle) * petalDistance,
      angle: (angle * 180) / Math.PI + 90,
    };
  };

  const getLabelPosition = (index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const labelDistance = 46;
    return {
      x: centerX + Math.cos(angle) * labelDistance,
      y: centerY + Math.sin(angle) * labelDistance,
    };
  };

  return (
    <div className="relative w-72 h-72 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {ingredients.map((_, i) => {
          const pos = getPetalPosition(i);
          const scale = 0.35 + (percentages[i] / 100) * 0.55;

          return (
            <g key={i}>
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="hsl(80, 15%, 88%)"
                strokeWidth="0.4"
              />

              <ellipse
                cx={pos.x}
                cy={pos.y}
                rx={10 * scale}
                ry={15 * scale}
                fill={petalColors[i % petalColors.length]}
                opacity={0.75}
                transform={`rotate(${pos.angle}, ${pos.x}, ${pos.y})`}
              />
            </g>
          );
        })}
      </svg>

      {/* Center image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-card shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Labels */}
      {ingredients.map((ingredient, i) => {
        const labelPos = getLabelPosition(i);

        return (
          <div
            key={i}
            className="absolute text-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${labelPos.x}%`, top: `${labelPos.y}%` }}
          >
            <span className="text-sm font-bold text-foreground block leading-tight">
              {percentages[i]}%
            </span>

            <span className="text-[10px] text-muted-foreground leading-tight">
              {ingredient.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FlowerChart;