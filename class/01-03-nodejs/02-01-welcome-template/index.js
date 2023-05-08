/*
회원가입 환영 메시지를 템플릿을 만드는 함수(가독성이 떨어지는 코드)
*/
function getWelcomeTemplate01() {
    return "<html><body><h1>환영합니다.</h1></body></html>"
}

/*
회원가입 환영 메시지를 템플릿을 만드는 함수(따옴표로 작성된 문자열 안에서는 enter 등을 사용한 문단 나누기 불가)
*/
function getWelcomeTemplate02() {
    return "<html>" +
        "<body><h1>환영합니다!</h1></body>" +
        "</html>"
}

/*
Template Literal의 이해
Template Literal
- ES6에서 새로 도입된 문자열 표기법
- +연산자를 사용하지 않지 않아도 새로운 문자열 삽입 가능
- 백틱 (``) 사용
- 표현식이나 변수의 삽입은 ${} 사용
*/
const apple = 3;
const banana = 2;

console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다.");
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);  // 템플릿 리터럴

/*
Template Literal의 적용: 이메일 템플릿 생성 함수 만들기
*/
function getWelcomeTemplate(name, age, school, createAt) {
    const result = `
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
    console.log(result)
}

const myname = "영희"
const myage = 12
const myschool = "다람쥐 초등학교"
const mycreatedAt = "2020-01-02"
getWelcomeTemplate(myname, myage, myschool, mycreatedAt)