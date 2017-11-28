import { ACTIONS as API_ACTIONS } from '../actions/apiActions';
import transformGiphyResponse from '../utils/transformGiphyResponse';

const initialState = [];

export default function searchResultGiphysReducer(state = initialState, action) {
  let searchResults;

  switch (action.type) {
    case API_ACTIONS.LOAD_SEARCH_FAILURE:
      console.log(API_ACTIONS.LOAD_SEARCH_FAILURE);
      return state;
    case API_ACTIONS.LOAD_SEARCH_SUCCESS:
      searchResults = transformGiphyResponse(action.data);
      return searchResults;
    default:
      return state;
  }
}
