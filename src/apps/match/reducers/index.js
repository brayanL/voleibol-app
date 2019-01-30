/* eslint-disable no-param-reassign */
import { ADD_ANNOTATION, INITIAL_TEAMS_DATA } from '../actions/types';

const TEAMS_INITIAL_STATE = {
  set: 1,
  teams: [
    {
      id: null,
      name: '',
      points: 0,
      service: true
    },
    {
      id: null,
      name: '',
      points: 0,
      service: false
    }
  ]
};
/**
 * Controls the logic of adding new points to each team, initializing
 * the initial data structure.
 * */
export default (state = TEAMS_INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_TEAMS_DATA:
      // add additional data to object.
      action.payload[0].service = true;
      action.payload[1].service = false;
      action.payload[0].points = 0;
      action.payload[1].points = 0;
      return {
        ...state,
        teams: action.payload
      };
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
      return {
        ...state
      };
    default:
      return state;
  }
};
