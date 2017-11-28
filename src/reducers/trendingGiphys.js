import { ACTIONS as API_ACTIONS } from '../actions/apiActions';
import transformGiphyResponse from '../utils/transformGiphyResponse';

const initialState = [];

export default function trendingGiphysReducer(state = initialState, action) {
  let trendingGiphys;
  console.log(action.type);

  switch (action.type) {
    case API_ACTIONS.LOAD_TRENDING_SUCCESS:
      trendingGiphys = transformGiphyResponse(action.data);
      return trendingGiphys;
    default:
      return state;
  }
}
