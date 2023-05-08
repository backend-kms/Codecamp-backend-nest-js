/* 
실행: 해당 파일까지 이동 후 node index.js
현재 위치: pwd 
*/

/* 
cd로 해당파일이 있는 곳까지 cd해서 진입 후 'node 파일명'으로 실행 
*/
console.log("안녕하세요 ~~")

/* 
랜덤한 숫자 6자리 출력
floor: 소수점 아래 이하 다 삭제
String으로 바꾸는 이유: 맨 앞에 있는 0은 숫자가 아니라 사라지는 문제가 있어서 그것을 해결하기 위해 String으로 변환
padStart: 6자리 중 빈 것들은 0으로 대체 
한계점: 때때로 4자리, 8자리 숫자를 랜덤으로 만들어야할 경우도 생기는데, 이 코드는 재사용성이 떨어짐 
*/
function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result); // 만들어진 토큰 출력
}

getToken();

/* 
위의 한계점 해결 
getToken2(count)의 count는 매개변수(Parameter)
getToken2(4)의 4는 인자(argument)
*/
function getToken2(count) {
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, "0")
    console.log(result)
}
getToken2(4);

/* 
핵심
전달인자 : 함수를 호출하며 함수 내부로 넘겨주는 데이터
매개변수 : 전달인자로 넘겨진 데이터를 함수 내부에서 받아오는 변수
return : 함수 내부의 데이터를 호출한 위치로 건네주는 커맨드, 그와 동시에 해당 함수를 종료 
*/