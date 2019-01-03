import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';

class Game extends Component {
  render() {
    const { width, height, rows, cols, array } = this.props;
    return (
      <div>
        <Board array={array} width={width} height={height} rows={rows} cols={cols} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.game.array,
    width: state.game.width,
    height: state.game.height,
    rows: state.game.rows,
    cols: state.game.cols
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
