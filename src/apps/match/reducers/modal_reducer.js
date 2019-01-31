import { SHOW_GAME_SET_MODAL, CLOSE_GAME_SET_MODAL } from '../actions/types';

const GAME_SET_MODAL_INITIAL_STATE = {
  gameSetModalIsOpen: false,
  set: 0,
  winner_name: ''
};

export default (state = GAME_SET_MODAL_INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_GAME_SET_MODAL:
      return {
        gameSetModalIsOpen: true
      };
    case CLOSE_GAME_SET_MODAL:
      return {
        gameSetModalIsOpen: false
      };
    default:
      return state;
  }
};
