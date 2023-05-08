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
import {CashService} from './mvc/controllers/services/cash.js'
import {ProductService} from './mvc/controllers/services/product.js'
import {PointService} from "./mvc/controllers/services/point.js";
import {ProductController} from './mvc/controllers/product.controller.js'
import {CouponController} from './mvc/controllers/coupon.controller.js'

const app = express()

// 추가되는 부분
const cashService = new CashService(); // 1. new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)
const productService = new ProductService();
const pointService = new PointService(); // 2. 쿠폰 구매 방식이 포인트결제로 변경됨(의존성 주입)

// 상품 API
const productController = new ProductController(cashService, productService); // cashService를 생성ㅇ자로 넣어줌
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰(상품권) API
const couponController = new CouponController(pointService)
app.post("/coupons/buy", couponController.buyCoupon) // 쿠폰 구매하기


app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!")
})

// DI(Dependency Injection) 의존성주입은 Tight Coupling(강한 결합)을 Loose Coupling(느슨한 결합)으로 전환 시키는 방법이며, 제어의 역전(Inversion of Control)의 기술 중 하나
// IoC(Inversion of Control / 제어의 역전) 제어의 역전(Inversion of Control)은 일반적인 디자인 패턴 중 하나