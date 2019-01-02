import React, { Component } from 'react';

export default class Spheres extends Component {
  positionOptions = {
    '1': ['translate(0%,-50%)'],
    '2': ['translate(25%,-50%)', 'translate(-25%,-50%)'],
    '3': ['translate(25%,-50%)', 'translate(-25%,-60%)', 'translate(0%,-130%)']
  };

  render() {
    const count = this.props.count || 1;
    const shadowBrightness = '20%';
    const translate2d = this.positionOptions[count + ''];

    return (
      <React.Fragment>
        {[...Array(count)].map((item, i) => (
          <div
            key={this.props.id + i * count}
            style={{
              width: '40%',
              height: '40%',
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              display: 'inline-block',
              position: 'relative',
              top: '50%',
              transform: translate2d[i],
              background: `radial-gradient(circle at 15px 5px, rgb(0,255,0) ${shadowBrightness}, rgb(0,0,0))`
            }}
          >
            {/* {this.props.count} */}
          </div>
        ))}

        {/* for one - translate(0%,-50%) */}
        {/* for two - translate(25%,-50%) and translate(-25%,-50%) on x-axis */}
        {/* for three translate(25%,-50%),translate(-25%,-60%), translate(0%,-130%)*/}
        {/* <div
          style={{
            width: '40%',
            height: '40%',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'inline-block',
            position: 'relative',
            top: '50%',
            transform: 'translate(25%,-50%)',
            background: `radial-gradient(circle at 15px 5px, rgb(0,255,0) ${shadowBrightness}, rgb(0,0,0))`
          }}
        >
        </div>
        <div
          style={{
            width: '40%',
            height: '40%',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'inline-block',
            position: 'relative',
            top: '50%',
            transform: 'translate(-25%,-60%)',
            background: `radial-gradient(circle at 15px 5px, rgb(0,255,0) ${shadowBrightness}, rgb(0,0,0))`
          }}
        >
        </div>
        <div
          style={{
            width: '40%',
            height: '40%',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'inline-block',
            position: 'relative',
            top: '50%',
            transform: 'translate(0%,-130%)',
            background: `radial-gradient(circle at 15px 5px, rgb(0,255,0) ${shadowBrightness}, rgb(0,0,0))`
          }}
        >
        </div> */}
      </React.Fragment>
    );
  }
}
