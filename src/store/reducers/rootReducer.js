import { combineReducers } from 'redux';
import chainReducer from './chainReducer';

const rootReducer = combineReducers({ chain: chainReducer });

export default rootReducer;
