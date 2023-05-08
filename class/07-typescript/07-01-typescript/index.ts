// 설치 npm add typescript --save-dev
// https://www.npmjs.com/package/@tsconfig/recommended


// 타입 추론: 처음에 들어간 값에 따라서 type이 자동으로 생성됨
let aaa = "안녕하세요"
aaa = 3

// 타입 명시
let bbb: string = "반갑습니다"
bbb = 10

// 타입 명시가 필요한 상황
let ccc: (number | string) = 1000
ccc = "1000원"

// 숫자 타입
let ddd: number = 10
ddd = "철수"

// 불린 타입
// 거짓 0, "", NaN, null, undefined
// 참 " ", "false"
let eee: boolean = true
eee = false
eee = "false"

// 배열 타입
let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]
let ggg: (string | number)[] = ["철수", "영희", "훈이", 10]

// 객체 타입 (기본)
const profile = {
    name: '철수',
    age: 8,
    school: '다람쥐 초등학교'
}

profile.name = "훈이" // 가능
profile.age = "8" // 불가
profile.hobby = "수영" // 불가

// 객체 타입 (타입 명시)
interface IProfile {
    name: string,
    age: number | string,
    school: string,
    hobby?: string
}

const profile1: IProfile = {
    name: '철수',
    age: 8,
    school: '다람쥐 초등학교'
}

profile1.name = "훈이" // 가능
profile1.age = "8" // 가능
profile1.hobby = "수영" // ?덕분에 추가 가능

// 함수 타입
// 함수는 타입 추론이 되지 않음: 어디서 몇번이든 호출이 가능하기 때문에
function add(num1, num2, unit) {

}
add(1000, 2000, "원")

// 함수 타입 (타입 명시)
function add1(num1: number, num2: number, unit: string): string { // : string 함수의 리턴 타입
    return num1 + num2 + unit
}
const result = add1(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

// 함수 타입 화살표 함수
const add2 = (num1: number, num2: number, unit: string): string => { // : string 함수의 리턴 타입
    return num1 + num2 + unit
}
const result2 = add1(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

//any 타입은 쓰지 않음 -> 자바 스크립트와 동일
let qqq: any = "철수"
qqq = 123
qqq = true