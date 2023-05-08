/* 
객체 지향 프로그래밍(Object-Oriented-Programming)
프로그래밍에서 필요한 데이터를 추상화 시켜 상태와 행위를 가진 객체로 만들고, 객체들간의 상호작용을 통해 로직을 구성하는 프로그래밍 방법

특징
1. 추상화(Abstraction)
2. 캡슐화(Encapsulation)
3. 상속성(Inheritance)
4. 다형성(polymorphism)
*/

/* Express를 이용한 API 만들기 */

import express from 'express'

const app = express()

// 상품 구매하기 API
app.post("/productions/buy"), (req, res) => {
    // 1. 가진 돈을 검증하는 코드 (대략 10줄)

    // 2. 판매여부 검증하는 코드 (대략 10줄)

    // 3. 상품 구매하는 코드
    // if (돈있음 && !판매완료){
    //     res.send("상품 구매 완료")
    // }
}

// 상품 환불하기 API
app.post("products/refund"), (req, res) => {
    // 1. 판매 여부 확인하는 코드 (대략 10줄)

    // 2. 상품 환불하는 코드
    // if(판매완료) {
    //     res.send("상품 환불 완료")
    // }
}

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!")
})

// 실제로 검증하는 로직을 작성하지는 않았지만 여기서 핵심은 객체지향프로그래밍(OOP)을 하지 않으면 
// 이처럼 코드의 길이가 길어져 가독성이 현저히 떨어지며, 
// 같은 내용의 코드가 존재한다면 하나하나 찾아가서 함께 고쳐줘야 하기에 유지보수 효율성이 떨어짐