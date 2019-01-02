import React, { Component } from 'react';

export default class Cell extends Component {
  render() {
    const width = this.props.width || '50px';
    const height = this.props.height || '50px';

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
          style={{
            background: 'black',
            width: '40%',
            height: '40%',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'inline-block',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle at 15px 5px, rgb(0,255,0) 40%, rgb(0,0,0))'
          }}
        >
          {/* {this.props.id} */}
        </div>
      </div>
    );
  }
}
