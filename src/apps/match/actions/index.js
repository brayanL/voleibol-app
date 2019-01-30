import { ADD_ANNOTATION, INITIAL_TEAMS_DATA } from './types';

export const addAnnotation = payload => ({ type: ADD_ANNOTATION, payload });
export const setInitialTeamsData = payload => ({ type: INITIAL_TEAMS_DATA, payload });

