export * from 'html5-connection/lib/util';

export function unParam(searchStr) {
  if (searchStr.indexOf('?') === 0) {
    searchStr = searchStr.substring(1);
  }
  var pairs = searchStr.split('&'),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === '' ) continue;

    pair = pairs[i].split('=');
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair.slice(1).join('=') );
  }

  return obj;
}