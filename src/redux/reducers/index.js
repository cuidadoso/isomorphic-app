/**
 * Created by apyreev on 06-Apr-17.
 */
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import timeRedicer from './timeReducer';

export default combineReducers({
  counter: counterReducer,
  time: timeRedicer
});
