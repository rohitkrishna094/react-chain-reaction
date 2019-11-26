import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  render() {
    const { width, height, rows, cols, array } = this.props;
    // prettier-ignore
    const cells = [...Array(rows)].map((c, i) => [...Array(cols)].map((r, j) => <Cell key={i * cols + j} id={i * cols + j } count={array[i][j]} />));
    return (
      <div className="Board" style={{ width: width, height: height }}>
        {cells}
      </div>
    );
  }
}

export default Board;
