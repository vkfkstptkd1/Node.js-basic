// find file list in directory
var testFolder - './data';//현재 디렉터리에 있는 data를 뜻함.디렉터리가 같으므로 data라고 써도 돼
var fs = require('fs);

fs.readdir(testFolder, function(err,filelist{//data에 있는 파일 리스트를 배열로 나타낸다.
	console.log(filelist);
})
