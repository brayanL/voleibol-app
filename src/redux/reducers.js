/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import startGameReducer from '../apps/main/reducers/start_game_reducer';

export const RESET_STATE = 'RESET_STATE';

/**
 * Combine all reducers for the App.
 * */
const appReducer = combineReducers({
  startGameReducer
});

/**
 * Create a Root Reducer, add action RESET STATE,
 * for clear all state in application.
 * */
const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;