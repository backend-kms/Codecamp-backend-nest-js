// 상품 관련 API

import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class ProductController {
    
    buyProduct(req, res) { // cashService와 productService를 변수로 생성하고, 직접 사용하는데 이런 관계를 의존 관계(dependency)라고 함
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

// controller 내부에서  비즈니스 로직을 변수로 선언하여 사용함에 따라 강하게 결합(Tight Coupling)되어 있다고 하며, 높은 의존성을 가지고 있다고 이야기 함
// MVC패턴을 적용했기 때문에 검증하는 비즈니스 로직인 ProductService와 CashService는 재사용이 가능