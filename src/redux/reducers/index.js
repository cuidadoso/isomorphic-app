/**
 * Created by apyreev on 06-Apr-17.
 */
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

export default combineReducers({
  counter: counterReducer
});
