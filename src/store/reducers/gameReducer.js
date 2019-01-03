import { PROPAGATE } from '../actionTypes/actionTypes';

// prettier-ignore
const arr = [
  [3, 1, 3, 1, 3, 1],
  [1, 3, 1, 2, 3, 1],
  [3, 3, 2, 3, 2, 1],
  [1, 2, 1, 3, 2, 2],
  [2, 2, 0, 2, 3, 3],
  [3, 2, 2, 1, 2, 1],
  [2, 3, 1, 3, 3, 2],
  [1, 3, 3, 2, 2, 2],
  [2, 2, 2, 1, 2, 2],
  [3, 1, 1, 3, 1, 3],
]
const width = '300px';
const height = '500px';
const rows = 10;
const cols = 6;

const initialState = { array: arr, width, height, rows, cols };
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROPAGATE:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default gameReducer;
