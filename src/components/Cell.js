import React, { Component } from 'react';
import Spheres from './Spheres';
import { propagate } from '../store/actions/GameActions';
import { connect } from 'react-redux';
import './Sphere.css';
import './Cell.css';

class Cell extends Component {
  state = {};
  style = {};
  innerStyle = {};

  componentWillMount() {
    const width = this.props.width || '50px';
    const height = this.props.height || '50px';
    const count = this.props.count || 0;
    this.setState({ width, height, count });

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

  onClick = e => {
    // before doing anything make sure this cell can be clicked by current user that is he/she is not clicking other players' cell
    console.log(this.props.id);
    if (this.state.count >= 0 && this.state.count < 3) {
      this.setState({ count: this.state.count + 1 });
    } else {
      // dispatch an action
      this.props.propagate(this.props.id);
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div className="Cell" style={this.style} onClick={this.onClick}>
        <div className="Sphere" style={this.innerStyle}>
          <Spheres count={count} id={this.props.id} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    propagate: id => dispatch(propagate(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cell);
