/* 
주민번호 만들기
주민번호 뒷자리를 가리는 함수를 하나 만들고, 해당 함수에 "210510-1010101"와 같이 주민번호를 넣어서 실헹하면 "210510-1******"와 같은 형태로 콘솔에 출력되도록 만들기
*/
/* 
조건
a. 주민번호 가운데가 "-"로 구성되어야 하며 그렇지 않을 경우 에러 메세지를 콘솔에 출력
b. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 하며 그렇지 않을 경우 에러 메세지를 콘솔에 출력
c. 뒤 7자리 중 끝 6자리는 *로 변경해서 콘솔에 출력
d. 함수는 퍼사드 패턴이 적용되어야 하며, 필요시 새로운 파일도 생성 가능
e. 함수에 "210510-1010101", "210510-101010101010101", "2105101010101"를 각각 넣어 실행했을 때 아래의 출력 결과 예시와 동일하게 나타나면됨
*/
import { checkValidationNumber, getNumber, sendNumber } from './mynumber.js'

function customRegistrationNumber(mynumber) {
    const [mynumber1, mynumber2] = mynumber.split("-")
    // 1. 주민번호 확인
    const isValid = checkValidationNumber(mynumber, mynumber1, mynumber2)
    if (isValid) {
        // 2. 주민번호 변환
        const mySwitch = getNumber(mynumber2)
        // 3. 주민번호 mySwitch
        sendNumber(mynumber1, mySwitch)
    }
}
customRegistrationNumber("210510-1010101")
customRegistrationNumber("210510-1010101010101")
customRegistrationNumber("2105101010101")