/* 클래스란
객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성됨
즉, 물건 만드는 설명서라고 생각
*/

class Monster {
  // Monster 클래스
  power = 10;

  attack = () => {
    // Monster의 기능 1: attack() 함수
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!"); // this를 사용하여 클래스 내부에 존재하는 다른 함수 또는 변수를 함수 내에서 사용 가능, this = Monster class
  };

  run = () => {
    // Monster의 기능 2: run() 함수
    console.log("도망가자!!");
  };
}

const mymonster1 = new Monster(); // new Monster(): new 연산자와 생성자 함수를 사용해 새로운 객체 mymonster 생성 = Monster 클래스를 가지고 새로운 인스턴스 생성
mymonster1.attack(); // Monster Class 내부에 존재하는 함수들에 대해 .을 통해 접근 가능
mymonster1.run();

const mymonster2 = new Monster();
mymonster2.attack();
mymonster2.run();

// 초기값을 다르게 주고 싶을 때
class Monster1 {
  power = 10;

  constructor(qqq) {
    // 내장함수 constructor() 생성자를 사용하여 초기값 생성 가능
    this.power = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!");
  };

  run = () => {
    console.log("도망가자!!");
  };
}

const mymonster3 = new Monster1(20); // new Monster할 때 constructor 내부
mymonster3.attack();
mymonster3.run();

const mymonster4 = new Monster1(50);
mymonster4.attack();
mymonster4.run();
