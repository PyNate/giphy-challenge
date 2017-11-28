export default function transformGiphyResponse(responseData) {
  return responseData.data.map(giphy => (
    {
      id: giphy.id,
      title: giphy.title,
      url: giphy.images.original.url,
    }
  ));
}
