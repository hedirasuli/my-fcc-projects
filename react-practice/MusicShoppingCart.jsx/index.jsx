export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img 
        className="mood-board-image" 
        src={image} 
        alt={description} 
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem 
          color="#FFD700" 
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" 
          description="Santorini Views" 
        />
        <MoodBoardItem 
          color="#87CEEB" 
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" 
          description="Ocean Breeze" 
        />
        <MoodBoardItem 
          color="#90EE90" 
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" 
          description="Green Fields" 
        />
      </div>
    </div>
  );
}
