var http=require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것임.

	function templateHTML(title,list,body){

	return `
	<!doctype html>
	<html>
	<head>
	  <title>WEB1 - ${title}</title>
	  <meta charset="utf-8">
	</head>
	<body>
	  <h1><a href="/">WEB</a></h1>
	  ${list}
	  ${body}
	</body>
	</html>
	`;
	}

	function templateList(fileList){

	var list = '<ul>';
	var i = 0;
	while(i<filelist.length){
	list = list + `<li><a href="/?=${filelist[i]}">${filelist[i]}</a></li>`
	i=i+1;
	}
	list = list+'</ul>';
	
	return list;
	}

var app = http.createServer(function(request,response){
	var _url = request.url;
	// request.url 은 /?id=////가 들아감 즉, queryString이 들어감.
	var queryData = url.parse(_url,true).query;
	//queryData의 출력은 {id : ////} ////를 얻고싶다면queryData.id
	var pathname = url.parse(_url,true).pathname;

	if (pathname ==='/')//path가 없는 경로로 접속했다면, pathname이 root라면
	 {
	 if(queryData.id===undefined)//querydata.id가 없을 때 즉, 홈페이지
	  {
		fs.readdir('./data',function(err,filelist){//파일 목록을 배열로 나타내주는 함수

	        var title = "Welcome";
	        var description = "Hello, Node";
		var list = templateList(fileList);
		var template = templateHTML(title,list,`<h2>${title}</h2><p>${description}</p>`);
		response.writeHead(200);//서버가 브러우저에게 200이라는 숫자를 주면 성공적으로 전송됐다는 뜻.
		response.end(template); //이제 화면에는 변경된 template 출력.

		})
	   } else {

	      fs.readdir('./data',function(err,filelist){
		fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){//파일을 읽어오는 함수.

		var title = queryData.id;
		var list = templateList(fileList);
		var template = templateHTML(title,list,`<h2>${title}</h2><p>${description}</p>`);
		response.writeHead(200);//서버가 브러우저에게 200이라는 숫자를 주면 성공적으로 전송됐다는 뜻.
		response.end(template); //이제 화면에는 변경된 template 출력.
		});
	       });
	     }
	  } else {//그 외의 경로로 접속했다면.
		response.writeHead(404);//페이지를 찾을 수 없다는 신호
		response.end('Not Found'); 
	  }
});
app.listen(3000);

//함수를 이용해서 정리.
