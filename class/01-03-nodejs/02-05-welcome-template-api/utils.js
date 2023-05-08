/*
자바스크립트 Date객체
- 1970년 1월 1일 UTC(국제표준시) 자정으로부터 지난 시간을 밀리초단위로 나타내는 정수 값을 담음
- 컴퓨터 기록물을 대부분 차지하고 있는 UNIX 타임스탬프 값과는 다름
- 이러한 Date객체를 사용하여 보통 회원가입 시 생성 시간을 나타낼 때 자주 사용

자주 사용하는 Date객체의 method
const date = new Date()     // 자바스크립트 Date객체를 date라는 변수에 할당합니다.

date.getFullYear();         // 연도를 반환합니다.
date.getMonth();            // 월을 반환합니다. 0(월)부터 시작하므로 주의하세요!
date.getDate();             // 일을 반환합니다.
date.getDay();              // 요일을 반환합니다.(일요일: 0)
date.getHours();            // 시를 반환합니다.
date.getMinutes();          // 분을 반환합니다.
date.getSeconds();          // 초를 반환합니다.
date.getMilliseconds();     // 밀리초를 반환합니다.
*/

export function getToday() {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = date.getMonth() + 1
    const dd = date.getDate()

    return `${yyyy}-${mm}-${dd}`
}

console.log(getToday())