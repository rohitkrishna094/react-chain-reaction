import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

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

    // prettier-ignore
    const cells = [...Array(rows)].map((c, i) => [...Array(cols)].map((r, j) => <Cell key={i * cols + j} id={i * cols + j } count={array[i][j]} />));
    return (
      <div className="Board" style={{ width: width, height: height }}>
        {cells}
      </div>
    );
  }
}
