function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.includes('stores.staging.customink.com/')) {
    var redirectUri = uri.replace('stores.staging.customink.com/', 'www-master.staging.customink.com/');

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
