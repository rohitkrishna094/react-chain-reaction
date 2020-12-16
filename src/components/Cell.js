import React, { useEffect } from 'react';
import Spheres from './Spheres';
import { increment, split } from '../store/actions/GameActions';
import { useDispatch, useSelector } from 'react-redux';
import './Sphere.css';
import './Cell.css';
import { getCriticalMass } from '../store/reducers/gameReducer';

const Cell = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { array } = game;

  const style = {
    width: '50px',
    height: '50px',
  };
  const innerStyle = {
    width: '50px',
    height: '50px',
  };

  const onClick = (e) => {
    const { id } = props;
    if (props.count === getCriticalMass(array, id) - 1) {
      dispatch(split(id));
    } else {
      dispatch(increment(id));
    }
  };

  let { count } = props;
  if (array) {
    if (count >= getCriticalMass(array, props.id)) count--;
  }

  return (
    <div className="Cell" style={style} onClick={onClick}>
      <div className="Sphere" style={innerStyle}>
        <Spheres count={count} id={props.id} />
      </div>
    </div>
  );
};

export default Cell;
