import React from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';

const Game = () => {
  const game = useSelector((state) => state.game);
  const { width, height, rows, cols, array } = game;

  return (
    <div>
      <Board array={array} width={width} height={height} rows={rows} cols={cols} />
    </div>
  );
};

export default Game;
