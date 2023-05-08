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
import { CashService } from '../06-05-express-with-OOP/cash'
import { ProductService } from '../06-05-express-with-OOP/product'

const app = express()

// 상품 구매하기 API
app.post("/productions/buy"), (req, res) => {
    // 1. 가진 돈을 검증하는 코드 (대략 10줄)
    const cashService = new CashService()
    const hasMoney = CashService.checkValue() // true 또는 false 리턴
    // 2. 판매여부 검증하는 코드 (대략 10줄)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout() // true 또는 false 리턴
    // 3. 상품 구매하는 코드
    // if (돈있음 && !판매완료){
    //     res.send("상품 구매 완료")
    // }
    if(hasMoney && !isSoldout){
        res.send("상품 구매 완료!!")
    }
}

// 상품 환불하기 API
app.post("products/refund"), (req, res) => {
    // 1. 판매 여부 확인하는 코드 (대략 10줄)
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout()  // true 또는 false 리턴
    // 2. 상품 환불하는 코드
    // if(판매완료) {
    //     res.send("상품 환불 완료")
    // }
    if(isSoldout) {
        res.send("상품 환불 완료!!")
    }
}

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!")
})

// 상품 환불하기 기능에 동일하게 판매 여부를 검증해야 하는데 **객체지향프로그래밍(OOP)을 사용하면 위와 같이 동일하게 메서드 재사용이 가능하고 추후에 유지 보수도 간편해짐
// 한눈에 봐도 메인 `index.js` 파일의 **가독성이 높아진 것**을 볼 수 있음