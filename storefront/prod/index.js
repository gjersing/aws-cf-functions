function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  if (uri.includes('stores.customink.com/storefront')) {
    const redirectUri = uri.replace('stores.customink.com/storefront', 'customink.com/c');

    const redirectResponse = {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers:
        { "location": { "value": redirectUri } }
    }

    return redirectResponse;
  }

  return request;
}
