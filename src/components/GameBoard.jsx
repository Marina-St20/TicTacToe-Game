import Tile from './Tile';

function GameBoard({ board, onClick }) {
    return (
        <div className="game-board">
            {board.map((value, index) => (
                <Tile key={index} value={value} onClick={() => onClick(index)} />
            ))}
        </div>
    )
}

export default GameBoard;