var fs = require('fs');


//동기
//readFileSync

console.log('A');
var result = fs.readFileSync('practice/sample.txt');
console.log(result);
console.log('C');
/*
출력 :
A
B

C
*/

//비동기
//readFile
//노드js야 파일찾는데 시간걸리니까 다른거 실행시키고 마지막에 함수 호출해!

console.log('A');
fs.readFile('practice/sample.txt','utf8',function(err,result){
  console.log(result);
});
console.log('C');

/*
출력 :
A
C
B
*/
