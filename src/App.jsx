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

  //Helper Functions
  //  calculateWinner
  //  handleNewGameClick
  //  handleTileClick

  function calculateWinner() {
    //array of all possibilities of 3 in a rows
    const winList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    //for loop through each array in the array to see if all are x or o (all same thing)
    for (let i = 0; i < winList.length; i++) {
      const [a,b,c] = winList[i]

      if (board[a] && board[a]===board[b] && board[b]===board[c]) { //board[a] to ensure none are null
        return true;
      }
    }
    //else return null
    return null;
  }

  function handleNewGameClick() {
    //clear board's tiles
    setBoard(Array(9).fill(null));
  }

  function handleTileClick(tileNum) {
    if (board[tileNum] === null) {
      if (isXNext) {
        board[tileNum] = "X";
      } 
      else {
        board[tileNum] = "O";
      }
      setIsXNext(!isXNext);
    }
    console.log(`clicked tile ${tileNum} , board[tileNum] = ${board[tileNum]}`);
  }

  return (
    <div className="game-app-div">
      <p className="game-title">Tic-Tac-Toe Game</p>
      {/* New Game Button */}
      <GameButton onClick={handleNewGameClick} />
      {/* Status Message */}
      <StatusMessage message={statusMessage} />
      {/* Game Board */}
      <GameBoard board={board} onClick={handleTileClick}/>
      {/* Tiles - will be in game board component */}
    </div>
  )
}

export default App;
