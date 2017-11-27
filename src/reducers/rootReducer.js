import { combineReducers } from 'redux';
import apiKey from './apiKey';
import searchResultGiphys from './searchResultGiphys';
import searchTerms from './searchTerms';
import trendingGiphys from './trendingGiphys';

export default combineReducers({
  apiKey,
  searchResultGiphys,
  searchTerms,
  trendingGiphys,
});
