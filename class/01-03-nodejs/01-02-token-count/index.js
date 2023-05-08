/* getToken 안정성 높이기 */
function getToken3(count) {
    if (count === undefined) {
        console.log("에러 발생, 갯수를 제대로 입력해주세요.")
        return // 함수 종료
    } else if (count <= 0) {
        console.log("에러 발생, 갯수가 너무 작습니다.")
        return
    } else if (count > 10) {
        console.log("에러 발생, 갯수가 너무 많습니다.")
        return
    }
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, "0")
    console.log(result)
}
getToken3(8);

/* 
Null과 Undefined 차이
null: 강제로 안을 비어놓는 것
undefined: 값이 비어있는 것
*/