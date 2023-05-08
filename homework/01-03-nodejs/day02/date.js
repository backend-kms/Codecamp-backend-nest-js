/* 현재 날짜와 시간을 출력하는 함수 만들기 */

function OutputDateTime() {
    const nowdate = new Date()

    const year = nowdate.getFullYear()
    const month = nowdate.getMonth() + 1
    const date = nowdate.getDate()

    const hours = nowdate.getHours()
    const minutes = nowdate.getMinutes()
    const seconds = nowdate.getSeconds()

    console.log(`오늘은 ${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds} 입니다.`)
}
OutputDateTime()