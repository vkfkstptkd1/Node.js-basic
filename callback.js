/*function a(){
console.log('A');
}*/

//javascript에서는 함수가 값이다. 위랑 같은 코드임.
var a = function(){
console.log('A');
}
//a();

function slowfunc(callback){//오래 걸리는 함수
callback();
}

slowfunc(a);
//a를 인자로 받고 callback()을 통해 나중에 처리
