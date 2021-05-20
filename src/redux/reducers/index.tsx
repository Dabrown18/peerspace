import {combineReducers} from 'redux';
import picSumReducer from './picSumReducer';

const rootReducer = combineReducers({
  picSum: picSumReducer,
});

export default rootReducer;
