import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
  render() {
    // ratio 6 x 10 - 6 cells x 10 cells
    const width = this.props.width || '300px';
    const height = this.props.height || '500px';
    const rows = this.props.rows || 10;
    const cols = this.props.rows || 6;
    const arr = new Array(rows);
    console.log(arr.length);
    // let cells;
    // for (let i = 0; i < rows; i++) {
    //   for (let j = 0; j < cols; j++) {
    //     cells += <Cell />;
    //   }
    // }

    return (
      <div style={{ width: width, height: height, backgroundColor: 'rgb(50,50,50)', margin: '10px auto' }}>
        {/* {new Array(rows).map((row, i) => {
          new Array(cols).map((col, j) => <Cell />);
        })} */}

        {[...Array(cols)].map((c, i) => [...Array(rows)].map((r, j) => <Cell key={j + i * rows} id={j + i * rows} />))}
      </div>
    );
  }
}
