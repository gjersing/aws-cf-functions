function getURLSearchParamsString(querystring) {
  var str = [];
  for (var param in querystring) {
    var query = querystring[param];
    var multiValue = query.multiValue;
    if (multiValue) {
      str.push(multiValue.map((item) => param + '=' + item.value).join('&'));
    } else if (query.value === '') {
      str.push(param);
    } else {
      str.push(param + '=' + query.value);
    }
  }
  return str.join('&');
}

function handler(event) {
  var request = event.request;
  var redirectPath = request.uri;
  var redirectQs = Object.keys(request.querystring).length 
    ? `?${getURLSearchParamsString(request.querystring)}` 
    : '';
  var location = `https://www.customink.com/s${redirectPath}${redirectQs}`;
  var redirectResponse = {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers:
    { "location": { "value": location } }
  }
  return redirectResponse;
}
