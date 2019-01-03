import React, { Component } from 'react';
import Spheres from './Spheres';
import './Sphere.css';

export default class Cell extends Component {
  render() {
    const width = this.props.width || '50px';
    const height = this.props.height || '50px';
    const count = this.props.count || 0;

    return (
      <div
        style={{
          width: width,
          height: height,
          border: '1px rgba(255,0,0,0.9) solid',
          display: 'inline',
          float: 'left',
          boxSizing: 'border-box',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div
          className="Sphere_sphere"
          style={{
            width: width,
            height: height
          }}
        >
          <Spheres count={count} id={this.props.id} />
        </div>
      </div>
    );
  }
}
