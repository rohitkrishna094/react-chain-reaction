import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
  render() {
    // ratio 6 x 10 - 6 cells x 10 cells
    const width = this.props.width || '300px';
    const height = this.props.height || '500px';
    const rows = this.props.rows || 10;
    const cols = this.props.rows || 6;

    // count={((j + i * rows) % 3) + 1}
    return (
      <div style={{ width: width, height: height, backgroundColor: 'rgb(50,50,50)', margin: '10px auto' }}>
        {[...Array(cols)].map((c, i) =>
          [...Array(rows)].map((r, j) => (
            <Cell key={j + i * rows} id={j + i * rows} count={(Math.floor(Math.random() * 1000) % 3) + 1} />
          ))
        )}
      </div>
    );
  }
}
