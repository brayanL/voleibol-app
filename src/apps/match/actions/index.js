/* eslint-disable no-param-reassign */
import {
  ADD_ANNOTATION,
  INITIAL_TEAMS_DATA } from './types';
import { showGameSetModal } from './modal_actions';
import api from '../../../redux/api';

export const addAnnotation = payload => ({ type: ADD_ANNOTATION, payload });
export const setInitialTeamsData = payload => ({ type: INITIAL_TEAMS_DATA, payload });

/**
 * Add Additional Data to Teams and dispatch setInitialTeamsData action the which
 * restart all values for a new set.
 * */
export const initialTeamsData = (teams) => {
  return dispatch => {
    teams[0].service = true;
    teams[1].service = false;
    teams[0].points = 0;
    teams[1].points = 0;
    teams[0].winner = false;
    teams[1].winner = false;
    dispatch(setInitialTeamsData(teams));
  };
};

/**
 * Save Sets for Game, when a set has finished, the results
 * obtained by each team are sent.
 * */
export const saveSetGame = () => {
  return (dispatch, getState) => {
    const match = getState().startGameReducer.response.match;
    const set = getState().annotationsReducer.set;
    const teams = getState().annotationsReducer.teams;

    dispatch(showGameSetModal());
    api.post('add_set/',
        [
          { set_number: set, match, team: teams[0].id, points: teams[0].points },
          { set_number: set, match, team: teams[1].id, points: teams[1].points }
        ])
        .then(response => {
          console.log('Response SaveSetGame: ', response);
          //todo: dispatch any action
        }).catch(error => {
          //todo: dispatch any action
          console.log('Error SaveSetGame: ', error);
    });
    //reset game values
    dispatch(initialTeamsData(
        JSON.parse(JSON.stringify(getState().startGameReducer.response.teams))));
  };
};

