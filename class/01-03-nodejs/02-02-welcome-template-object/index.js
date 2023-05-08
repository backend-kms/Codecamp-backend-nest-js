/*
Template Literal의 적용: 이메일 템플릿 생성 함수 만들기
*/
function getWelcomeTemplate(user) {
    const result = `
        <html>
            <body>
                <h1>${user.name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${user.name}<div>
                <div>나이: ${user.age}<div>
                <div>학교: ${user.school}<div>
                <div>가입일: ${user.createdAt}}<div>
            </body>
        </html>
    `
    console.log(result)
}
// 회원가입 유저 정보를 Object(객체)에 담아서 함수와 함께 호출
const myUser = {
    name: '철수',
    age: 13,
    school: '다람쥐 초등학교',
    createdAt: '2020-02-01'

};

// 전달인자로 여러개의 데이터를 넘겨줄 필요 없이 하나의 객체를 넘겨주고, 함수 안에서도 하나의 매개변수를 받아와 객체로서 값을 관리 가능
const result = getWelcomeTemplate(myUser);
// console.log(myUser.name);