function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var newUrl = 'https://www.customink.com/c';

  if (uri.startsWith('/storefront')) {
    var redirectUri = uri.replace('/storefront', '');
    newUrl += redirectUri;
  } else {
      newUrl += uri;
  }
  
  var redirectResponse = {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers:
        { "location": { "value": newUrl } }
  }
  
  return redirectResponse;
}
