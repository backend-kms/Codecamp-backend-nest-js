// 상품 관련 API

import { CashService } from "./services/cash.js";
import { ProductService } from "./services/product.js";

export class ProductController { 
    // ProductController가 CashService와 ProductService에 의존하고 있는 상태
    // 따라서 CashService class가 없으면 ProductController class 정의 불가
    // CashService class(ProductionService class)에서 수정이 일어나게되면 ProductController class 코드 대부분에서 변경이 일어나게 됨
    // -> ProductController가 CashService와 ProductService에 의존성이 존재한다고 하는 것이며, 강하게 결합되어 있다(Tight Coupling)고도 부름
    
    constructor(cashService, productService) { // Constructor Inject(생성자 주입)을 사용해서 DI(Dependency Injection) 의존성 주입을 해주었음
        this.cashService = cashService;
        this.productService = productService;
    }

    buyProduct(req, res) {

        // 1. 가진돈 검증하는 코드
        const cashService = new CashService()
        const hasMoney = cashService.checkValue() // true 또는 false
    
        // 2. 판매여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout() // true 또는 false
    
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout) {
            res.send('상품 구매 완료!!')
        }
    }

    refundProduct(req, res) {
        // 1. 판매여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout() // true 또는 false
    
        // 2. 상품 환불하는 코드
        if(isSoldout){
            res.send('상품 환불 완료!!')
        }
    }

}