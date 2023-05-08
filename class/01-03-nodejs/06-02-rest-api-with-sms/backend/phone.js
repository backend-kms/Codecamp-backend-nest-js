// npm add coolsms-node-sdk 모듈 설치

import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default

export function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log("에러발생, 핸드폰 번호를 올바르게 입력해주세요.")
        return false
    } else {
        return true
    }
}

export function getToken() {
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

export async function sendTokenToSMS(phone, token) {
    // 환경변수 파일을 읽어오기 위해 06-02-rest-api-with-sms 폴더에서 라이브러리 설치 -> npm add dotenv
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;

    const messageService = new mysms(SMS_KEY, SMS_SECRET) // ("API-KEY", "API-SECRET")
    const res = await messageService.sendOne({
        to: phone,
        from: SMS_SENDER,
        text: ` (node.js 개발 연습) 안녕하세요. 요청하신 인증번호는 ${token} 입니다.`
    })
    console.log(res)
    // console.log(phone + "번호로 인증번호" + result + "를 전송합니다.")
}