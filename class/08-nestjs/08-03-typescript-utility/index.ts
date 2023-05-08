// Utility Type: 기존에 있던 Type들을 변형해서 변형된 타입을 새로 만들어주는 역할, 코드의 가독성을 높이기 위해(같은 코드를 여러번 작성하지 않기 위해) 많이 사용

// utility type 확인을 위해 IProfile 이라는 임의의 타입 한 개를 지정
interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
} // Typescript에서 해당 값이 존재하지 않아도 될 때에는 ?를 사용

// Utility Types 실습
/* 
1. Partial Type 
- 모든 속성을 선택사항으로 바꿔주는 역할
*/
type aaa = Partial<IProfile>; // aaa의 타입들을 확인해 보면, 모두 ?가 붙은것을 확인 가능 -> aaa에 존재하는 name, age, school, hobby의 값들은 모두 존재하지 않아도 무방

/*
2. Required Type
- 모든 속성을 필수사항으로 바꿔주는 역할 (Partial Type과 반대)
*/
type bbb = Required<IProfile>; // bbb의 타입들을 확인해보면, hobby에 있었던 ?가 없어진 것 확인 가능 -> bbb에 존재하는 name, age, school, hobby의 값들은 모두 무조건 존재해야 합

/*
3. Pick Type
- 원하는 속성만을 뽑아서 사용하고 싶을 때 사용
*/
type ccc = Pick<IProfile, "name" | "age">; // ccc의 타입을 확인해보면 내가 원하는 name과 age에 대한 Type만 존재하는 것을 확인 가능

/*
4. Omit Type
- 원하는 속성만 제거하여 사용
*/
type ddd = Omit<IProfile, "school">; // ddd의 타입을 확인해보면 name, age, hobby에 대한 Type만 존재하는 것을 확인 가능

/*
5. Record Type
- Utility 속성을 다른 Type으로 매핑 시키고자 할 때 사용
- Record<Key, Type> 으로 사용하며, Key로 들어온 타입을 Type 값을 가지는 타입으로 만들 수 있음
*/
type eee = "철수" | "영희" | "훈이"; // Union 타입
type fff = Record<eee, IProfile>; // Record 타입 // 유니온 타입을 key로 받고 각각의 value를 IProfile로 매핑 시켜 준 것 // “철수”, “영희”, “훈이”를 key로 받게 되며, IProfile를 value 값으로 매핑 된 것을 확인 가능

/* Union Type ? 
- Javascript의 OR 연산자 (||)와 같이 'A'이거나 'B'이다 라는 의미의 타입으로 | 연산자를 이용하여 타입 또는 값을 여러개 연결할 때 사용
*/
type MyUnion = "철수" | "영희" | "훈이"; // 철수, 영희, 훈이 라는 string 값을 가진 MyUnion을 만들어 줌
let child: MyUnion; // child는 string 타입을 가지고 있기는 하지만 일반적 string 타입과는 다름, string 타입을 가지고 있으면서 해당 값으로 철수, 영희, 훈이만 들어갈 수 있음
child = "철수";

/*
Keyof Type ?
- 해당 객체 내 key 값을 Union 형태로 반환 시켜주는 역할을 함
- 즉, IProfile의 key 만을 뽑아서 새로운 타입을 만들고 싶을 때 사용
*/
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby" 형태의 Union 타입
let myprofile: ggg;
myprofile = "name";

/* 
type과 interface의 차이 ?
- interface는 type과 달리 선언병합이 가능
- 즉, IProfile을 만들어 주었는데, 또다시 IProfile을 만들어 주게 된다면 두 IProfile이 합쳐진 하나의 IProfile이 생성되게 됨
*/
interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

interface IProfile {
  candy: number;
}

let profile1: IProfile = {
  name: "짱구",
  age: 10,
  school: "다람쥐초등학교",
  candy: 10, // 선언병합으로 추가됨
};

// Partial 타입 적용 → candy 만 사용 가능
let profile2: Partial<IProfile> = {
  candy: 10, // 선언병합으로 추가됨
};
