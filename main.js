var http=require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것임.

var app = http.createServer(function(request,response){
	var _url = request.url;
	// request.url 은 /?id=////가 들아감 즉, queryString이 들어감.
	var queryData = url.parse(_url,true).query;
	//queryData의 출력은 {id : ////} ////를 얻고싶다면queryData.id
	var title = queryData.id;
	var pathname = url.parse(_url,true).pathname;
	if (pathname ==='/')//path가 없는 경로로 접속했다면, pathname이 root라면
	 {
	    fs.readFile(`data/${title}`,'utf8',function(err,description){//파일을 읽어오는 함수.
		var template=`
		<!doctype html>
		<html>
		<head>
		  <title>WEB1 - ${title}</title>
		  <meta charset="utf-8">
		</head>
		<body>
		  <h1><a href="/">WEB</a></h1>
		  <ol>//여기 클릭했을 때 주소도 바꿔줘야함.
		    <li><a href="/?=HTML">HTML</a></li>
		    <li><a href="/?=CSS">CSS</a></li>
		    <li><a href="/?=JavaScript">JavaScript</a></li>
		  </ol>
		  <h2>${title}</h2>
		  <p>${description}</p>//data에 내용에 따라서 본문이 달라짐.
		</body>
		</html>`
		response.writeHead(200);//서버가 브러우저에게 200이라는 숫자를 주면 성공적으로 전송됐다는 뜻.
		response.end(template); //이제 화면에는 변경된 template 출력.
		});
	  } else {//그 외의 경로로 접속했다면.
		response.writeHead(404);//페이지를 찾을 수 없다는 신호
		response.end('Not Found'); 
	  }
});
app.listen(3000);

//존재하지 않는 경로로 들어왔을 때, Not found라고 뜨게끔 출력
