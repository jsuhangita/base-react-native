import { SET_SPINNER } from '../action/common.action';

export default function spinner(state = false, action) {
  switch (action.type) {
    case SET_SPINNER: {
      return action.payload || false;
    }
    default: {
      return state;
    }
  }
}
