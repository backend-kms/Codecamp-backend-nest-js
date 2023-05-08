/*
퍼사드 패턴(Facade Pattern)
안에 여러가지 복잡한 로직이 있더라도, 밖에서 보이는 정면에 있는 함수에서는 비교적 간단하게 흐름을 파악 가능
*/

/*
인증 번호 요청(토큰 생성) API
*/

import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

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