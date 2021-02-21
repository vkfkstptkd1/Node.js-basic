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
	  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
	  <img src="coding.jpg" width="100%">
	  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
	  </p>
	</body>
	</html>`
	response.end(queryData.id); // 화면에는 queryData의 id만 출력됨.
	});
app.listen(3000);

//만약 이걸 배우지 않았더라면 자료가 엄청나게 많을 때, 비슷하게 생긴 홈페이지에서 <ol>하나 바꾸려고 하는데 하나하나 다 바꿔야함.
//사소한 변화를 한번에 해결 가능함. 
