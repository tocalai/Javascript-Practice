// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  console.log('query: ' + unescape(query));
  var out = {};
  var re = /(.*?)=(.*)/;
  var splitArr = query.split('&');
  var parse = [];

  splitArr.forEach(function(entry){
  	   console.log('entry: ' + entry);
       var matches = entry.match(re);       
       console.log('matches: ' + matches); 
       if(matches !== null){
       	  var data = {};
       	  data['path'] =  RegExp.$1;
       	  data['value'] = RegExp.$2;
       	  parse.push(data);
       }
  });

  parse.forEach(function(data){
  	console.log('data: ' + data.path + ' ' + data.value);
  	set(data.path, unescape(data.value));
  });
  
  console.log('out: ' + JSON.stringify(out));  
  return out;

  function set(path, value) {
    var schema = out;  // a moving reference to internal objects within obj
    var pList = path.split('.');
    var len = pList.length;
    for(var i = 0; i < len-1; i++) {
        var elem = pList[i];
        if( !schema[elem] ) schema[elem] = {}
        schema = schema[elem];
    }

    schema[pList[len-1]] = value;
  };
}


var input = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
//input = "a=a%26b%3Dc%3F"; // a=1%202
//input = "a=1%202";
convertQueryToMap(input);
