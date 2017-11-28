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

export function handleSearchResponse(response) {
  if (response.status === 200) {
    return {
      type: ACTIONS.LOAD_SEARCH_SUCCESS,
      data: response,
    };
  }
  return { type: ACTIONS.LOAD_TRENDING_FAILURE };
}

export function startSearch(searchString) {
  return {
    type: ACTIONS.START_SEARCH,
    searchString,
  };
}
