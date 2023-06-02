import React, { useState, useEffect } from 'react';
import { Piece } from '../Piece/Piece';
import Pieces from './PiecesData';
import './Board.css';
import { Timer } from '../Timer/Timer';

export const Board = () => {
  const [board, setBoard] = useState(Pieces); // Estado para almacenar el tablero
  const [moves, setMoves] = useState(0); // Estado para contar los movimientos del jugador

  const handleClick = (pieceId) => {
    const pieceIndex = board.findIndex((piece) => piece.id === pieceId); // Índice del elemento seleccionado
    const emptyIndex = board.findIndex((piece) => piece.id === 16); // Índice del espacio vacío

    if (isAdjacent(pieceIndex, emptyIndex)) {
      const newBoard = [...board]; // Copia del tablero actual
      // REVIEW explain how this assignment works
      [newBoard[pieceIndex], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[pieceIndex]]; // Intercambio de posiciones
      setBoard(newBoard); // Actualización del tablero
      setMoves(moves + 1); // Incremento del contador de movimientos
    }
  };

  const isAdjacent = (pieceIndex, emptyIndex) => {
    const pieceRow = Math.floor(pieceIndex / 4); // Fila del elemento seleccionado
    const pieceColumn = pieceIndex % 4; // Columna del elemento seleccionado
    const emptyRow = Math.floor(emptyIndex / 4); // Fila del espacio vacío
    const emptyColumn = emptyIndex % 4; // Columna del espacio vacío

    return (
      (pieceRow === emptyRow && Math.abs(pieceColumn - emptyColumn) === 1) || // Verificar si están en la misma fila y columnas adyacentes
      (pieceColumn === emptyColumn && Math.abs(pieceRow - emptyRow) === 1) // Verificar si están en la misma columna y filas adyacentes
    );
  };

  useEffect(() => {
    // Verificar si el puzzle está completo
    const isPuzzleComplete = board.every((piece, index) => piece.id === index + 1);
    
    if (isPuzzleComplete) {
      alert('¡Puzzle completado!');
      // Aquí puedes realizar alguna acción cuando el puzzle esté completo
    }
  }, [board]);

  return (
    <div className='board-container'>
      {/* Componente del temporizador */}
      <Timer />

      <div className="board">
        {board.map((piece) => (
          <Piece key={piece.id} id={piece.id} imgUrl={piece.imgUrl} handleClick={handleClick} />
        ))}
      </div>

      <div className='referencia-div'>
        <h2>Referencia:</h2>
        <img src="assets/challenge-image.jpeg" alt="" />
        <h2>movimientos:</h2>
        <p>{moves}</p>
      </div>
    </div>
  );
};
