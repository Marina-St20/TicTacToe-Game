import { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="gameAppDiv">
      <p className="gameTitle">Tic-Tac-Toe Game</p>
      {/* Status Message */}
      {/* Game Button */}
      {/* Game Board */}
      {/* Tiles - will be in game board component */}
    </div>
  )
}

export default App
