import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
  state = {};

  componentWillMount() {
    const width = this.props.width || '300px';
    const height = this.props.height || '500px';
    const rows = this.props.rows || 10;
    const cols = this.props.rows || 6;
    let array = [];
    if (this.props.array) {
      array = this.props.array;
    } else {
      for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
          array[i][j] = (Math.floor(Math.random() * 1000) % 3) + 1;
        }
      }
    }

    this.setState({ width, height, rows, cols, array });
  }

  render() {
    const { width, height, rows, cols, array } = this.state;
    return (
      <div style={{ width: width, height: height, backgroundColor: 'rgb(50,50,50)', margin: '10px auto' }}>
        {[...Array(rows)].map((c, i) =>
          [...Array(cols)].map((r, j) => {
            return <Cell key={j + i * rows} id={j + i * rows} count={array[i][j]} />;
          })
        )}
      </div>
    );
  }
}
