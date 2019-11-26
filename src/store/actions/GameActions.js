import { INCREMENT, SPLIT } from '../actionTypes/actionTypes';

// gets the id of the cell on which onClick was called and where there were already 3 balls
export const increment = id => {
  return (dispatch, getState) => {
    // induce delay if need be

    dispatch({ type: INCREMENT, payload: id });
  };
};

export const split = id => {
  return (dispatch, getState) => {
    // later(1).then(() => dispatch({ type: SPLIT, payload: id }));
    dispatch({ type: SPLIT, payload: id });
  };
};

const later = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};
