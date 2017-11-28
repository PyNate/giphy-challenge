import { ACTIONS as API_ACTIONS } from '../actions/apiActions';

export default function searchTermsReducer(state = [], action) {
  let newState;
  switch (action.type) {
    case API_ACTIONS.START_SEARCH:
      if (state.indexOf(action.searchString) < 0) {
        newState = state.slice();
        newState.push(action.searchString);
        return newState;
      }
      return state;
    default:
      return state;
  }
}
