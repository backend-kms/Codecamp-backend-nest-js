/*
Shorthand property names
myUser라는 객체 정의 후 key: value 값 지정 -> key: value가 동일한 이름을 가지고 있음 -> value 생략 가능 -> Shorthand property names
*/

function getWelcomeTemplate({ name, age, school, createdAt }) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}<div>
                <div>나이: ${age}<div>
                <div>학교: ${school}<div>
                <div>가입일: ${createdAt}}<div>
            </body>
        </html>
    `
}

const name = '철수'
const age = 13
const school = '다람쥐초등학교'
const createdAt = '2020-02-01'

// const myUser = {
//     name: name,
//     age: age,
//     school: school,
//     createAt: createdAt
// };

// shorthand property names 적용
const result = getWelcomeTemplate({ name, age, school, createdAt });
console.log(result);