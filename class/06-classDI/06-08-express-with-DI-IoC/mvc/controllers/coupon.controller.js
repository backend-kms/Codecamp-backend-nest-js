import { CashService } from './services/cash.js'

export class CouponController { // CouponController가 CashService에 의존하고 있으므로 서로 강하게 결합되어 있다고 말할 수 있음
    
    constructor(cashService) {
        this.cashService = cashService;
    }
    
    buyCoupon = (req, res) => {
        // 1. 가진 돈을 검증하는 코드
        const cashService = new CashService()
        const hasMoney = cashService.checkValue()

        // 2. 쿠폰 구매하는 코드
        if (hasMoney){
            res.send("쿠폰 구매 완료!!")
        }
    }
}