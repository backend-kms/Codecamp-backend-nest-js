// 같은 기능들을 사용할 때는 코드의 효율성을 높이기 위해 중복되는 코드들을 최소화 시켜 주는것이 좋음 -> 상속 사용 (extends)

class Monster {
    power = 10;

    constructor(qqq) {
        this.power = qqq;
    }

    attack = () => {
        console.log("공격하자!!");
        console.log("내 공격력은 " + this.power + "야!!!");
        };
}

class 공중몬스터 extends Monster{ // 공통 기능들을 extends를 통해서 공중몬스터와 지상몬스터에 상속해줌으로써 사용 가능하게 함

    constructor(aaa) {
        super(aaa) // 생성자 constuctor는 공중몬스터와 지상몬스터에서 동일하게 사용할 수 있지만, 현재 power 변수는 상속해준 Monster 클래스 내부에 존재하므로, 그 내부에 있는 constuctor로 인수를 넘겨주기 위해 사용
    }

    run = () => {
    console.log("날라서 도망가자!!");
    };
}

class 지상몬스터 extends Monster{

    constructor(bbb) {
        super(bbb)
    }
    
    run = () => {
        console.log("뛰어서 도망가자!!");
    };
}

const mymonster1 = new 공중몬스터(20);
mymonster1.attack();
mymonster1.run();

const mymonster2 = new 지상몬스터(50);
mymonster2.attack();
mymonster2.run();