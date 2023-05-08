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
import { ProductController } from './mvc/controllers/product.js'

const app = express()

// 상품 API
const productController = new ProductController()
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰(상품권) API
const couponController = new CouponController()
app.post("/coupons/buy", couponController.buyCoupon) // 쿠폰 구매하기


app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!")
})
