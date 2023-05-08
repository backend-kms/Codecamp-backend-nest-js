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

export function sendTokenToSMS(a, b) {
    console.log(a + "번호로 인증번호" + b + "를 전송합니다.")
}