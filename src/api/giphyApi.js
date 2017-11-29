import buildUrl from '../utils/buildUrl';
import GIPHY_URL from '../constants/giphyUrl';

const TRENDING_ENDPOINT = '/trending';
const SEARCH_ENDPOINT = '/search';

const defaultParams = {
  limit: 25,
  rating: 'G',
};

const defaultSearchParams = {
  lang: 'en',
  offset: 0,
};

export function getTrendingGiphys(apiKey) {
  const params = {
    ...defaultParams,
    api_key: apiKey,
  };
  return fetch(buildUrl(GIPHY_URL, TRENDING_ENDPOINT, params));
}

export function getGiphySearch(apiKey, search) {
  const queries = search.slice(1).split('&').filter(query => query.indexOf('q=') === 0);
  const searchTerm = queries[0].slice(2);

  const params = {
    ...defaultParams,
    ...defaultSearchParams,
    api_key: apiKey,
    q: searchTerm,
  };

  return fetch(buildUrl(GIPHY_URL, SEARCH_ENDPOINT, params));
}
