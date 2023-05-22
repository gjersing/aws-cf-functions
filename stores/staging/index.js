function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var newUrl = 'https://www-master.staging.customink.com';

  if (!uri.startsWith('/s/')) {
    newUrl += `/s`;
  }
  newUrl += `${uri}`;
  
  var redirectResponse = {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers:
        { "location": { "value": newUrl } }
  }

  return redirectResponse;
}
