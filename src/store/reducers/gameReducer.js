import { INCREMENT, SPLIT } from '../actionTypes/actionTypes';

// prettier-ignore
// const arr = [
//   [1, 1, 2, 1, 2, 1],
//   [1, 3, 1, 2, 3, 1],
//   [2, 3, 2, 3, 2, 1],
//   [1, 2, 1, 3, 2, 2],
//   [2, 2, 0, 2, 3, 2],
//   [1, 2, 2, 1, 2, 1],
//   [2, 3, 1, 3, 3, 2],
//   [1, 3, 3, 2, 2, 2],
//   [2, 2, 2, 1, 2, 2],
//   [1, 1, 1, 2, 1, 1],
// ]
//prettier-ignore
const arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
const width = '300px';
const height = '500px';
const rows = 10;
const cols = 6;

const initialState = { array: arr, width, height, rows, cols, indices: [] };
const gameReducer = (state = initialState, action) => {
  const index = action.payload;
  const [r, c] = indexToCoordinates(index);
  switch (action.type) {
    case INCREMENT:
      const tempArray = getModifiedArray(clone2D(state.array), r, c);
      return { ...state, array: tempArray };
    case SPLIT:
      const res = splitArray(clone2D(state.array), r, c);
      const tempArray2 = res.arr;
      const indices = res.indices;
      // console.log(indices);
      return { ...state, array: tempArray2, indices };
    default:
      return state;
  }
};

const splitArray = (arr, x, y) => {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === x && j === y) {
        // modify orthogonal neighbors values
        let top = i - 1;
        let left = j - 1;
        let right = j + 1;
        let bottom = i + 1;

        if (top >= 0) {
          // console.log(arr[top][j]);
          if (arr[top][j] <= _getCriticalMass(arr, top, j) - 1) arr[top][j]++;
          else {
            // indices.push(coordinatesToIndex(top, j));
            indices.push([top, j]);
          }
        }
        if (bottom < arr.length) {
          // console.log(arr[bottom][j]);
          if (arr[bottom][j] <= _getCriticalMass(arr, bottom, j) - 1) arr[bottom][j]++;
          else {
            // indices.push(coordinatesToIndex(bottom, j));
            indices.push([bottom, j]);
          }
        }
        if (left >= 0) {
          // console.log(arr[i][left]);
          if (arr[i][left] <= _getCriticalMass(arr, i, left) - 1) arr[i][left]++;
          else {
            // indices.push(coordinatesToIndex(i, left));
            indices.push([i, left]);
          }
        }
        if (right < arr[0].length) {
          // console.log(arr[i][right]);
          if (arr[i][right] <= _getCriticalMass(arr, i, right) - 1) arr[i][right]++;
          else {
            // indices.push(coordinatesToIndex(i, right));
            indices.push([i, right]);
          }
        }
        arr[i][j] = 0;
      }
    }
  }
  return { arr, indices };
};

const indexToCoordinates = index => {
  const r = Math.floor(index / cols);
  const c = index % cols;
  return [r, c];
};

const coordinatesToIndex = (x, y) => {
  return x * cols + y;
};

const clone2D = a => {
  return a.map(o => [...o]);
};

const getModifiedArray = (arr, x, y) => {
  // console.log(x, y);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === x && j === y) {
        if (arr[i][j] === _getCriticalMass(arr, x, y) - 1) {
          console.log(x, y, arr[i][j]);
        } else arr[i][j]++;
      }
    }
  }
  return arr;
};

// note x is y and y is x, think about it.

export const getCriticalMass = (arr, index) => {
  const [r, c] = indexToCoordinates(index);
  return _getCriticalMass(arr, r, c);
};

const _getCriticalMass = (arr, x, y) => {
  let mass = 2,
    height = arr.length,
    width = arr[0].length;
  //prettier-ignore
  if((y === 0 && x === 0) || (y === width - 1 && x === 0) || (y === 0 && x === height - 1) || (y===width - 1 && x===height - 1)) {
    mass = 2;
  }
  else if(y === 0 || x === 0 || y === width-1 || x === height - 1) mass = 3;
  else mass = 4;
  return mass;
};

export default gameReducer;
