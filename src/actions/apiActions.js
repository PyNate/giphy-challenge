export const ACTIONS = {
  LOAD_TRENDING_FAILURE: 'LOAD_TRENDING_FAILURE',
  LOAD_TRENDING_SUCCESS: 'LOAD_TRENDING_SUCCESS',
  LOAD_SEARCH_FAILURE: 'LOAD_SEARCH_FAILURE',
  LOAD_SEARCH_SUCCESS: 'LOAD_SEARCH_SUCCESS',
  START_SEARCH: 'START_SEARCH',
};

export function loadTrendingGiphys(data) {
  return {
    type: ACTIONS.LOAD_TRENDING_SUCCESS,
    data,
  };
}

export function loadTrendingGiphysFailure() {
  return { type: ACTIONS.LOAD_TRENDING_FAILURE };
}

export function loadGiphySearch(data) {
  return {
    type: ACTIONS.LOAD_SEARCH_SUCCESS,
    data,
  };
}

export function loadGiphySearchFailure() {
  return { type: ACTIONS.LOAD_SEARCH_FAILURE };
}

export function startSearch(searchString) {
  return {
    type: ACTIONS.START_SEARCH,
    searchString,
  };
}
