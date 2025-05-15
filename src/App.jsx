import { useState } from 'react';
import './style.css';
import StatusMessage from './components/StatusMessage';
import GameButton from './components/GameButton';
import GameBoard from './components/GameBoard';

function App() {
  //States/Hooks:
  //  board (array w 9 string representing 3x3 board)
  //  isXNext (a boolean for whose turn is next) - default to true
  //  winner (null, X, or O)
  //  isGameOver (a boolean from winner/tie)
  //  statusMessage (to display)
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  //these will rerender based on board
  const winner = calculateWinner(); //three in a row
  const isGameOver = winner !== null || board.every(tile => tile !== null); //if winner is not null, or non of board is null

  //Change statusMessage
  let statusMessage = "";
  if (isXNext) {
    statusMessage = `Player ${statusMessage} turn`;
  }
  //if isXNext: Player X turn, else Player O turn
  //if isGameOver
  //  if !winner then Player {winner} wins!
  //  else It's a tie!


  //Helper Functions
  //  calculateWinner
  //  handleNewGameClick

  function calculateWinner() {
    //array of all possibilities of 3 in a rows
      
    //for loop through each array in the array to see if all are x or o (all same thing)

    //else return null
  }

  function handleNewGameClick() {
    //console.log("NEW GAME CLICKED");
    //clear board's tiles
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="game-app-div">
      <p className="game-title">Tic-Tac-Toe Game</p>
      {/* New Game Button */}
      <GameButton onClick={handleNewGameClick} />
      {/* Status Message */}
      <StatusMessage />
      {/* Game Board */}
      <GameBoard />
      {/* Tiles - will be in game board component */}
    </div>
  )
}

export default App;
