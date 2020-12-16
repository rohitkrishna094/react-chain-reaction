import React from 'react';
import './Sphere.css';

const Spheres = (props) => {
  /* for one - translate(0%,-50%)
     for two - translate(25%,-50%) and translate(-25%,-50%) on x-axis
     for three translate(25%,-50%),translate(-25%,-60%), translate(0%,-130%)*/
  const positionOptions = {
    1: ['translate(0%,-50%)'],
    2: ['translate(25%,-50%)', 'translate(-25%,-50%)'],
    3: ['translate(25%,-50%)', 'translate(-25%,-60%)', 'translate(0%,-130%)'],
  };

  let count = props.count || 0;
  // if (count > 3) count = 3;
  const shadowBrightness = '20%';
  const translate2d = positionOptions[count + ''];
  return (
    <>
      {[...Array(count)].map((item, i) => (
        <div
          className="Sphere_ball"
          key={props.id + i * count}
          style={{
            transform: translate2d[i],
            background: `radial-gradient(circle at 15px 5px, rgb(0,255,0) ${shadowBrightness}, rgb(0,0,0))`,
          }}
        ></div>
      ))}
    </>
  );
};

export default Spheres;
