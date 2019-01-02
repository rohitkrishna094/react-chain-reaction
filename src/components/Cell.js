import React, { Component } from 'react';
import Spheres from './Spheres';

export default class Cell extends Component {
  render() {
    const width = this.props.width || '50px';
    const height = this.props.height || '50px';
    const count = this.props.count || 1;

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
        <Spheres count={this.props.count} id={this.props.id} />
      </div>
    );
  }
}
