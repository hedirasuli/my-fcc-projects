// Use React.useState directly since we can't be sure about imports in the HTML environment
const { useState } = React;

/**
 * Logic to check for a winner based on 8 possible winning lines.
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleClick = (i) => {
    // If game won or square filled, do nothing
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Status message logic formatted exactly for FCC tests
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="container">
      <div className="status" id="status-message">{status}</div>
      <div 
        className="board-grid" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 100px)', 
          gap: '5px' 
        }}
      >
        {squares.map((value, i) => (
          <button 
            key={i} 
            className="square" 
            onClick={() => handleClick(i)}
            style={{ width: '100px', height: '100px', fontSize: '24px' }}
          >
            {value}
          </button>
        ))}
      </div>
      <button id="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

// Ensure it's exported for the HTML file to pick it up
export default Board;