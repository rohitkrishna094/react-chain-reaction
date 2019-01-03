import React, { Component } from 'react';
import Spheres from './Spheres';
import './Sphere.css';
import './Cell.css';

export default class Cell extends Component {
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
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Cell" style={this.style}>
        <div className="Sphere" style={this.innerStyle}>
          <Spheres count={count} id={this.props.id} />
        </div>
      </div>
    );
  }
}
