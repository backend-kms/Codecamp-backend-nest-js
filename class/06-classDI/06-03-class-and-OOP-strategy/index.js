/* Class 전략 패턴 실습(Strategy Pattern)
하나의 Monster를 만들어두고, 무슨 기능을 넣어주냐에 따라서 이 Monster들이 서로 다른 Monster가 되도록 생성
*/

class 공중부품 {
    run = () => {
        console.log("날라서 도망가자!!")
    }
}

class 지상부품 {
    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

class Monster {
    power = 10;
    qqq;

    constructor(부품) {
        this.qqq = 부품
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + "야!!!")
    }

    run = () => {
        this.qqq.run()
    }
}

const mymonster1 = new Monster(new 공중부품())
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(new 지상부품())
mymonster2.attack()
mymonster2.run()

/*
무조건 상속을 사용해야 하는 것이 아니고, 전략 패턴을 사용하는 것이 좋은 것이 아님

서비스의 상황에 따라서 상속을 사용할 것인지, 전략 패턴을 사용할 것인지 다름
예를 들어 부품이 핵심이 되고 부품을 가지고서 자동차, 오토바이 등을 만들면 상속을 사용하면 돠고
자동차가 핵심이 되고 A 부품을 사용할 지, B 부품을 사용하면 좋을 지 전략적으로 생각해서 만들면 전략 패턴을 사용하면 됨
*/