var http=require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것임.

var app = http.createServer(function(request,response){
	var _url = request.url; 
	// request.url 은 /?id=////가 들아감 즉, queryString이 들어감.
	var queryData = url.parse(_url,true).query;
	//queryData의 출력은 {id : ////} ////를 얻고싶다면queryData.id
	if(_url == '/')
	{
	  _url = '/index.html';
	}
	if(_url == '/favicon.ico'){
	  return response.writeHead(404);
	}
	response.writeHead(200);
	response.end(queryData.id); // 화면에는 queryData의 id만 출력됨.
	});
app.listen(3000);

//querystring에 따라서 다른 정보를 출력할 수 있는 코드임.
