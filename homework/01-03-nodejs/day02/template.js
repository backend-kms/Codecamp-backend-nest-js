/* 가입 환영 템플릿 만들기
회원가입을 축하하는 형태의 템플릿 출력
a. 이메일, 주민 번호, 휴대폰 번호, 내가 좋아하는 사이트를 함수의 입력으로 받고, 해당 내용이 html 태그가 포함된 텍스트로 콘솔에 출력되어야 함
*/

function HelloMessage(email, num, phone, site) {
    const result = `
        <html>
            <body>
                <h1>민수님 가입을 환영합니다.</h1>
                <hr>
                <div>이메일: ${email}</div>
                <div>주민번호: ${num}</div>
                <div>휴대폰 번호: ${phone}</div>
                <div>내가 좋아하는 사이트: ${site}}</div>
            </body>
        </html>
    `
    console.log(result)
}

const myemail = "mindu6424@naver.com"
const mynum = "000000-1******"
const myphone = "010-1234-1234"
const mysite = "내가 좋아하는 사이트는 두구두구"
HelloMessage(myemail, mynum, myphone, mysite)