function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  if (uri.includes('stores.customink.com/')) {
    var redirectUri = uri.replace('stores.customink.com/', 'customink.com/');

    if (!uri.includes('customink.com/s/')) {
      redirectUri = redirectUri.replace('customink.com/', 'customink.com/s/');
    }

    var redirectResponse = {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers:
        { "location": { "value": redirectUri } }
    }

    return redirectResponse;
  }

  return request;
}
