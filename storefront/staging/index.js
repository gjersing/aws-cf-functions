function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  if (uri.includes('stores.staging.customink.com/storefront')) {
    const redirectUri = uri.replace('stores.staging.customink.com/storefront', 'www-master.staging.customink.com/c');

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
