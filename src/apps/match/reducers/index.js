/* eslint-disable no-param-reassign */
import { ADD_ANNOTATION, INITIAL_TEAMS_DATA } from '../actions/types';

let teamIndex = 0;
const TEAMS_INITIAL_STATE = {
  set: 0,
  finish_set: false,
  winner_team_name: '',
  teams: [
    {
      id: null,
      name: '',
      points: 0,
      service: true,
      winner: false
    },
    {
      id: null,
      name: '',
      points: 0,
      service: false,
      winner: false
    }
  ]
};
/**
 * Controls the logic of adding new points to each team, initializing
 * the initial data structure.
 * */
export default (state = TEAMS_INITIAL_STATE, action) => {
  switch (action.type) {
    //Reset all values for to start new set
    case INITIAL_TEAMS_DATA:
      return {
        ...state,
        set: state.set + 1,
        finish_set: false,
        teams: action.payload
      };
      //Add Points a specific team and check Set Winner.
    case ADD_ANNOTATION:
      state.teams.map(team => {
        if (team.id === action.payload.id) {
          team.points += 1;
          team.service = true;
          return { ...team };
        }
        team.service = false;
        return team;
      });
      teamIndex = state.teams.findIndex(team => team.points >= 25);
      if (teamIndex !== -1) {
        if ((teamIndex + 1) === state.teams.length) {
          if ((state.teams[teamIndex].points - state.teams[teamIndex - 1].points) >= 2) {
            state.finish_set = true;
            state.teams[teamIndex].winner = true;
            state.winner_team_name = state.teams[teamIndex].name;
          }
        } else if ((state.teams[teamIndex].points - state.teams[teamIndex + 1].points) >= 2) {
          state.finish_set = true;
          state.teams[teamIndex].winner = true;
          state.winner_team_name = state.teams[teamIndex].name;
        }
      }
      return {
        ...state
      };
    default:
      return state;
  }
};
