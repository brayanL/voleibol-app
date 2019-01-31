import { SHOW_GAME_SET_MODAL, CLOSE_GAME_SET_MODAL } from './types';

export const showGameSetModal = payload => ({ type: SHOW_GAME_SET_MODAL, payload });
export const closeGameSetModal = payload => ({ type: CLOSE_GAME_SET_MODAL, payload });
