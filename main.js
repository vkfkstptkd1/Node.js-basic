var http=require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것임.

var app = http.createServer(function(request,response){
	var _url = request.url; 
	// request.url 은 /?id=////가 들아감 즉, queryString이 들어감.
	var queryData = url.parse(_url,true).query;
	//queryData의 출력은 {id : ////} ////를 얻고싶다면queryData.id
	var title = queryData.id;
	if(_url == '/')
	{
	  title = 'WelCome';
	}
	if(_url == '/favicon.ico'){
	  return response.writeHead(404);
	}
	response.writeHead(200);
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
		response.end(template); //이제 화면에는 변경된 template 출력.
		});
    	  });
app.listen(3000);

//필요한 자료를 받아서 오면 우리가  본문을 길게 변경하지 않아도 하나의 변수와 함수만으로 해결 가능.
//파일에 본문을 저장하고, node.js의 파일읽기기능(fs.readFile)을 이용해 본문 생성.
