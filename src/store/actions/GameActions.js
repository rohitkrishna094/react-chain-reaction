import { PROPAGATE } from '../actionTypes/actionTypes';

// gets the id of the cell on which onClick was called and where there were already 3 balls
export const propagate = id => {
  return (dispatch, getState) => {
    // induce delay if need be

    dispatch({ type: PROPAGATE, payload: id });
  };
};
