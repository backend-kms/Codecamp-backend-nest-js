// public, private, protected, readonly 중
// 1. public

class Monster {

    // power = 10 // public, private, protected, readonly 등 1개라도 있으면 자동 생성되며, power = 10 생략 가능

    constructor(private power) {
        // this.power = power; // public, private, protected, readonly 등 1개라도 있으면 자동 생성되며, 이 줄 생략 가능
    }

    attack1() {
        console.log("나의 공격력은 " + this.power + "야!") // 안에서 접근 가능
        this.power = 30 // 안에서 수정 가능
    }
}

class Monster2 extends Monster {
    attack2() {
        console.log("나의 공격력은 " + this.power + "야!"); // 자식이 접근 가능
        this.power = 30 // 자식이 수정 가능
    }
}
const Monster3 = new Monster2(20);
Monster3.attack1()
Monster3.attack2()
console.log(Monster3.power) // 밖에서 접근 가능
Monster3.power = 10 // 밖에서 수정 가능
