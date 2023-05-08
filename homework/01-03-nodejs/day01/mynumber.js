export function checkValidationNumber(mynumber, mynumber1, mynumber2) {
    if (!mynumber.includes('-')) {
        console.log("에러 발생, 형식을 제대로 입력해주세요.");
        return false;
    }
    if (mynumber1.length !== 6 || mynumber2.length !== 7) {
        console.log("에러 발생, 개수를 제대로 입력해주세요.");
        return false;
    }
    return true;
}


export function getNumber(mynumber2) {
    const birthDate = mynumber2.slice(0, 1);
    const maskedNumber = mynumber2.slice(1).replace(/\d/g, "*");
    return `${birthDate}${maskedNumber}`;
}

export function sendNumber(mynumber1, mySwitch) {
    const maskedNumber = getNumber(mySwitch)
    console.log(`${mynumber1}-${maskedNumber}`)
}
