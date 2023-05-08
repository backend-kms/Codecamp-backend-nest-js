/*
퍼사드 패턴(Facade Pattern)
안에 여러가지 복잡한 로직이 있더라도, 밖에서 보이는 정면에 있는 함수에서는 비교적 간단하게 흐름을 파악 가능
*/

/*
인증 번호 요청(토큰 생성) API
*/

function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러발생, 핸드폰 번호를 올바르게 입력해주세요.")
        return false
    } else {
        return true
    }
}

function getToken() {
    const mycount = 6
    if (mycount == undefined) {
        console.log("에러 발생, 갯수를 제대로 입력해주세요.")
        return
    } else if (mycount <= 0) {
        console.log("에러 발생, 갯수가 너무 작습니다.")
        return
    } else if (mycount > 10) {
        console.log("에러 발생, 갯수가 너무 많습니다.")
        return
    }
    const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(mycount, "0")
    return result
    // console.log(result)
}

function sendTokenToSMS(a, b) {
    console.log(a + "번호로 인증번호" + b + "를 전송합니다.")
}

function createTokenOfPhone(myphone) {
    // 1. 휴대폰 번호의 자릿수가 맞는 지 확인하기 (번호 점검)
    const isValid = checkValidationPhone(myphone)
    if (isValid) {
        // 2. 인증 토큰을 6자리 만들기 (토큰 발급)
        const mytoken = getToken()
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)
    }
}
createTokenOfPhone("01012345678")