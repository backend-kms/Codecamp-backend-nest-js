/*기본 복사*/
function test01() {
    const child = '철수';
    const child2 = child;
    console.log(child2) // 철수
}
// test01()

function test02() {
    let myMoney = 1000;
    let myMoney2 = myMoney;
    console.log(myMoney2) // 1000
    myMoney = 500;
    console.log(myMoney2) // 1000
}
// test02()

function test03() {
    const profile = {
        name: '철수',
        age: 8,
        school: '다람쥐 초등학교',
    };
    const profile2 = profile;

    console.log(profile2) // { name: '철수', age: 8, school: '다람쥐 초등학교' }
    profile.name = '영희';
    console.log(profile2) // { name: '영희', age: 8, school: '다람쥐 초등학교' }
}
// test03()


/*객체와 배열의 데이터 저장 방식*/
function test04() {
    const name = '철수'; // 변수(name)의 메모리에 문자열 데이터 '철수' 저장
    const num = 123; // 변수(num)의 메모리에 숫자 데이터 123 저장
    const profile = {
        name: '철수',
        age: 8,
        school: '다람쥐 초등학교',
    }; // 변수(profile)의 메모리에 해당 객체 데이터 자체가 아닌 그 주솟값이 저장, 객체에 담긴 각 속성에는 실제 데이터가 저장되어 있음
    const profile2 = profile // 주솟값 복사
    profile2.name = '영희';
    console.log(profile) // {name: '영희', age: 8, school: '다람쥐초등학교'}

    const arr = [1, 2, 3]
    const arr2 = arr;
    arr2.push(4)
    console.log(arr) // [1, 2, 3, 4]
}
// test04()

/* 얕은 복사
완전히 새로운 객체를 생성해 주고 객체의 주소가 아닌, 실제 값을 복사해 주입해주는 것
이렇게 하면 실제 값인 문자열을 복사해 주었기 때문에 서로 영향이 가지 않음

지금처럼 객체를 그대로 복사하는 것에는 성공하였으나 만약 그 안에 또 다른 객체 혹은 배열이 존재한다면,
그 부분까지는 완전하게 복사하지 못하고 얕은 깊이 만을 복사하는 방식
실제 값이 아닌 주솟값을 복사하는 방식을 의미하며, spread 연산자를 통한 복사는 실제 값을 복사하되 그 안의 객체, 배열은 주솟값을 복사하기 때문에 얕은 복사라고 할 수 있음
*/
function test05() {
    const profile = {
        name: '영희',
        age: 8,
        school: '다람쥐 초등학교',
    }
    const profile3 = {
        name: profile.name,
        age: profile.age,
        school: profile.school
    }
    profile.name = '훈이';

    console.log(profile3.name) // 영희

    const profile4 = { ...profile };
    console.log(profile4) // { name: '훈이', age: 8, school: '다람쥐 초등학교' }

    profile.name = '지수'
    console.log(profile4.name) // 훈이

    // 스프레드 문법: 각각의 값을 하나씩 직접 복사해야하는 번거러움을 줄이기 위한 Spread 연산자
    // spread 연산자는 괄호 안에서 ...을 객체나 배열 앞에 작성해 사용 가능
    const result = [];
    const arr = [1, 2, 3];
    const arr2 = [4, 5, 6];

    result.push(...arr, ...arr2)
    console.log(result) // [1, 2, 3, 4, 5, 6]

    const student = {
        name: '홍길동',
        age: 17,
        grade: 'A'
    };
    console.log(student) // { name: '홍길동', age: 17, grade: 'A' }

    const newProfile = {
        name: '민수',
        age: 13,
        school: '다람쥐초등학교',
        hobby: {
            one: '수영',
            two: '프로그래밍'
        },
    };

    const newProfile2 = { ...newProfile };

    console.log(newProfile2) // {name: '민수',age: 13,school: '다람쥐초등학교',hobby: { one: '수영', two: '프로그래밍' }}

    newProfile.hobby.one = '공부';
    console.log(newProfile2.hobby.one) // 공부
    // -> 객체 내의 객체는 원본 객체와 같은 주솟값을 공유 -> 얕은 복사
}
// test05()

/* 깊은 복사 */
function test06() {
    // newProfile에는 주솟값이 아닌 실제 데이터(문자열 타입의 데이터)가 담겨져 있음
    const newProfile = `{
        name: '철수',
        age: 13,
        school: '다람쥐초등학교',
        hobby: {
            one: '수영',
            two: '프로그래밍',
        },
    }`
    JSON.stringify(newProfile); // JSON.stringify(): 인자로 들어온 데이터를 문자열로 변환, 이를 통해 원본 객체와는 전혀 다른, 단지 객체의 모양을 한 문자열을 돌려받게 됨
    console.log(newProfile) // {name: '철수',age: 13,school: '다람쥐초등학교',hobby: {one: '수영',two: '프로그래밍',},}

    JSON.parse(JSON.stringify(newProfile)) // JSON.stringify()를 통해 얻어낸 문자열을 객체 형태로 변환시켜 줌
    console.log(newProfile)

}
// test06()

/* REST 파라미터: rest parameter를 통해 생성되는 객체도 얕은 복사 */
function test07() {
    const child = {
        name: '철수',
        age: 8,
        school: '철수 학교',
        money: 2000,
        hobby: '수영'
    };

    // delete child.money; // 객체에서 특정 키에 해당하는 값을 제외하고 싶다면 -> 올바른 방법 아님
    // delete child.hobby;

    // console.log(child)

    // 구조분해 할당 사용
    const { money, hobby, ...rest } = child;

    console.log(money)
    console.log(hobby)
    console.log(rest)
}
// test07()