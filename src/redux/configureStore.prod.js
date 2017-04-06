/**
 * Created by apyreev on 05-Apr-17.
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
