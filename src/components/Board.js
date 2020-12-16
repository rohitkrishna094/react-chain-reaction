import React from 'react';
import Cell from './Cell';
import './Board.css';

const Board = (props) => {
  const { width, height, rows, cols, array } = props;
  const cells = [...Array(rows)].map((c, i) => [...Array(cols)].map((r, j) => <Cell key={i * cols + j} id={i * cols + j} count={array[i][j]} />));

  return (
    <div className="Board" style={{ width: width, height: height }}>
      {cells}
    </div>
  );
};

export default Board;
