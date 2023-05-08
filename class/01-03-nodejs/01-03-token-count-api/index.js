/*
인증 번호 요청(토큰 생성) API
*/
function createTokenOfPhone(myphone) {
    // 1. 휴대폰 번호의 자릿수가 맞는 지 확인하기 (번호 점검)
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러발생, 핸드폰 번호를 올바르게 입력해주세요.")
        return
    }

    // 2. 인증 토큰을 6자리 만들기 (토큰 발급)
    const count = 6
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

    // 3. 핸드폰 번호에 토큰 전송하기 (토큰 전송)
    console.log(myphone + "번호로 인증번호" + result + "를 전송합니다.")
}
createTokenOfPhone("01012345678")