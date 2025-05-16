// TicTacToe App- A simple Tic-Tac-Toe game
// Created by Marina S
// GitHub: github.com/Marina-St20
// License: MIT

import { useState } from 'react';
import './style.css';
import StatusMessage from './components/StatusMessage';
import GameButton from './components/GameButton';
import GameBoard from './components/GameBoard';

function App() {
  // ==== State Hooks ====

  // board: an array of 9 elements representing the 3x3 grid tiles
  const [board, setBoard] = useState(Array(9).fill(null));

  // isXNext: a boolean for who's turn is next
  const [isXNext, setIsXNext] = useState(true);

  // === Derived State (computed based on board)

  // winner: either X, O, or null if there is no winner or a tie
  const winner = calculateWinner();

  // isGameOver: true if game is over (win/tie)
  const isGameOver = winner !== null || board.every(tile => tile !== null);

  // statusMessage logic
  let statusMessage = "";
  if (isGameOver) {
    if (winner !== null) {
      statusMessage = `Player ${winner} wins!`;
    }
    else {
      statusMessage = `It's a tie!`
    }
  } else {
    statusMessage = `Player ${isXNext ? "X" : "O"} turn`;
  }

  // === Helper Functions ===

  // Determines if there's a winner by checking win conditions
  function calculateWinner() {
    // Array of all possibilities of 3 in a rows
    const winList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < winList.length; i++) {
      const [a, b, c] = winList[i]

      // Check if the same non-null symbol exsists in all three positions
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return isXNext ? "O" : "X";
      }
    }

    return null;
  }

  // Resets the game to its initial state
  function handleNewGameClick() {
    setBoard(Array(9).fill(null));
  }

  // Handles user clicking a tile
  function handleTileClick(tileNum) {
    // Prevent clicks if game is over
    if (isGameOver) return;

    // Only allow if tile is empty
    if (board[tileNum] === null) {
      const newBoard = [...board];
      newBoard[tileNum] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
    }
  }

  // === JSX Layout ===
  return (
    <div className="game-app-div">
      <p className="game-title">Tic-Tac-Toe Game</p>

      {/* New Game Button */}
      <GameButton onClick={handleNewGameClick} />

      {/* Status Message */}
      <StatusMessage message={statusMessage} />

      {/* Game Board */}
      <GameBoard board={board} onClick={handleTileClick} />

      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://github.com/Marina-St20/TicTacToe-Game"
          target="_blank"
          rel="noopener noreferrer"
          style = {{color: 'white'}}
        >
          Link to GitHub Source
        </a>
      </footer>
    </div>
  );
}

export default App;
