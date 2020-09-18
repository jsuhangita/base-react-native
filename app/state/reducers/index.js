import { combineReducers } from 'redux';
import  appSetup  from './appSetup.reducer';
import spinner from "./spinner.reducer";

const appReducers = combineReducers({
  // app reducer variable
  appSetup,
  spinner,
});
export default function rootReducer(state, action) {
  return appReducers(state, action);
}
