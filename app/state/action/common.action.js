import { createAction } from 'redux-actions';

export const APP_SETUP = 'APP_SETUP';
export const appSetup = createAction(APP_SETUP);

export const SET_SPINNER = 'SET_SPINNER';
export const setSpinner = createAction(SET_SPINNER);
