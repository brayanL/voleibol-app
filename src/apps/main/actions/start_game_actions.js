import api from '../../../redux/api';
import {
  LOADING_START_GAME,
  SUCCESS_START_GAME,
  UNSUCCESS_START_GAME
} from './types';

export const loadingStartGame = payload => ({ type: LOADING_START_GAME, payload });
export const successStartGame = payload => ({ type: SUCCESS_START_GAME, payload });
export const unSuccessStartGame = payload => ({ type: UNSUCCESS_START_GAME, payload });

//redux thunk action
export const startGame = teams => {
  console.log('Teams on Actions: ', teams);
  return dispatch => {
    dispatch(loadingStartGame());
    api.post('insert/',
        [{ name: teams.team1 }, { name: teams.team2 }])
        .then(response => {
          console.log('Response Start Game: ', response);
          dispatch(successStartGame(response.data));
        })
        .catch(error => {
          console.log('Error Start Game: ', error);
          dispatch(unSuccessStartGame({ error }));
        });
  };
};
