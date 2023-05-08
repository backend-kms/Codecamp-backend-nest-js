/*
구조 분해 할당(Destructuring)
- 가독성 증가
- 배열 혹은 객체의 구조를 분해한 뒤, 필요한 데이터를 할당해주는 개념
- 기준이 되는 객체에 반드시 해당 이름을 가진 key가 존재해야 함

객체 기존 방식
const name = user.name
const age = user.age
const school = user.school
const createdAt = user.createdAt

객체 구조 분해 할당
const { name, age, school, createdAt } = user

배열 기본 방식
const child1 = classmates[0];
const child2 = classmates[1];
const child3 = classmates[2];

배열 구조 분해 할당
const [child1, , child2, child3] = classmates;
*/

// const { name, age, school, createdAt } = user;} 를 아래 처럼 매개변수를 바로 구조분해할당 가능
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

const myUser = {
    name: '철수',
    age: 13,
    school: '다람쥐 초등학교',
    createdAt: '2020-02-01'

};

const result = getWelcomeTemplate(myUser);
console.log(result);