var http=require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
	var url = request.url;
	if(request.url == '/')
	{
	  url = '/index.html';
	}
	if(request.url == '/favicon.ico'){
	  return response.writeHead(404);
	}
	response.writeHead(200);
	response.end(fs.readFileSync(__dirname+url));
	//__dirname : 현재 파일이 위치한경로
	//url : 사용자가 페이지에서 요청한 것에 대한 url ex) /1.html
	//fs.readFileSync() : 괄호 안에 있는 경로의 파일을 가져와라
	});
app.listen(3000);
