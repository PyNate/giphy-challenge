import { ACTIONS as API_ACTIONS } from '../actions/apiActions';
import transformGiphyResponse from '../utils/transformGiphyResponse';

const initialState = [];

export default function trendingGiphysReducer(state = initialState, action) {
  let trendingGiphys;

  switch (action.type) {
    case API_ACTIONS.LOAD_TRENDING_FAILURE:
      console.log(API_ACTIONS.LOAD_SEARCH_FAILURE);
      return state;
    case API_ACTIONS.LOAD_TRENDING_SUCCESS:
      trendingGiphys = transformGiphyResponse(action.data);
      return trendingGiphys;
    default:
      return state;
  }
}
