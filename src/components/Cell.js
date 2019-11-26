import React, { Component } from 'react';
import Spheres from './Spheres';
import { increment, split } from '../store/actions/GameActions';
import { connect } from 'react-redux';
import './Sphere.css';
import './Cell.css';
import { getCriticalMass } from '../store/reducers/gameReducer';

class Cell extends Component {
  style = {};
  innerStyle = {};

  componentWillMount() {
    const width = this.props.width || '50px';
    const height = this.props.height || '50px';

    this.style = {
      width: width,
      height: height
    };
    this.innerStyle = {
      width: width,
      height: height
    };
    // console.log(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('object');
    if (nextProps.count === getCriticalMass(nextProps.array, nextProps.id)) {
      this.props.split(this.props.id);
    } else if (nextProps.count > getCriticalMass(nextProps.array, nextProps.id)) {
      console.log('object');
    }
    // const indices = nextProps.indices;
    // for (let i = 0; i < indices.length; i++) {
    //   const [x, y] = indices[i];
    //   const index = x * nextProps.cols + y;
    //   this.props.split(index);
    // }
    // if (nextProps.indices.length !== 0) console.log(nextProps.indices, nextProps.indices.length);
  }

  onClick = e => {
    // before doing anything make sure this cell can be clicked by current user that is he/she is not clicking other players' cell
    // console.log(this.props.id, this.props.count);
    // console.log('object ' + this.props.count);
    if (this.props.count === getCriticalMass(this.props.array, this.props.id) - 1) {
      this.props.split(this.props.id);
    } else {
      this.props.increment(this.props.id);
    }
    // if (this.state.count >= 0 && this.state.count < 3) {
    // this.setState({ count: this.state.count + 1 });
    // } else {
    //   // dispatch an action
    //   this.props.propagate(this.props.id);
    // }
  };

  render() {
    let { count } = this.props;
    if (count >= getCriticalMass(this.props.array, this.props.id)) count--;
    return (
      <div className="Cell" style={this.style} onClick={this.onClick}>
        <div className="Sphere" style={this.innerStyle}>
          <Spheres count={count} id={this.props.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.game.array,
    indices: state.game.indices,
    rows: state.game.rows,
    cols: state.game.cols
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: id => dispatch(increment(id)),
    split: id => dispatch(split(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
