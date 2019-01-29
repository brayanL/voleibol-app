import { LOADING_START_GAME, SUCCESS_START_GAME, UNSUCCESS_START_GAME } from '../actions/types';

const START_GAME_INITIAL_STATE = {
  waiting: false,
  response: null,
  error: null
};

export default (state = START_GAME_INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_START_GAME:
      return {
          ...state,
        waiting: true,
        response: null,
        error: null
      };
    case SUCCESS_START_GAME:
      return {
          ...state,
        waiting: false,
        response: action.payload,
        error: false
      };
    case UNSUCCESS_START_GAME:
      return {
          ...state,
        waiting: false,
        response: action.error,
        error: true
      };
    default:
      return state;
  }
};
