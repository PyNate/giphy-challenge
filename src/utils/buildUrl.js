export default function buildUrl(baseUrl, endpoint, parameters) {
  const queryString = Object.keys(parameters)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
    .join('&');

  return `${baseUrl}${endpoint}?${queryString}`;
}
