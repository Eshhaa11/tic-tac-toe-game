import React, { useState } from "react";
import "./Game.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}
      </div>
      <div className="board">
        {board.map((val, i) => (
          <div key={i} className="cell" onClick={() => handleClick(i)}>
            {val}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

function calculateWinner(squares) {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],            
  ];
  for (let [a, b, c] of combos) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
