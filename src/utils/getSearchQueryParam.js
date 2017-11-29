export default function getSearchQueryParam(search) {
  const queries = search.slice(1).split('&').filter(query => query.indexOf('q=') === 0);
  return queries[0] ? queries[0].slice(2) : '';
}
