/* 
1. 문자/숫자/불린 타입: 기본 타입으로 Primitive Type으로 불리기도 함 
*/
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  // 입력되는 값에 대한 타입을 ()안에 정의해줬음
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true); // 다른 타입으로 입력을 하게 되면 error가 발생

/* 
2. any 타입 (그냥 자바스크립트랑 같음) 
*/
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨
  return [arg3, arg2, arg1];
};
const result1 = getAny("철수", 123, true);

/* 
3. unknown 타입: any 타입처럼 모든 타입이 들어갈 수는 있지만, 아직은 어느 타입을 사용할지 모를 때 사용 
*/
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // console.log(arg1 + 100); // 사용할 수 없음
  if (typeof arg1 === "number") console.log(arg1 + 100); // unknwon은 사용할 때, 타입을 가정하여 사용해야 함
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("철수", 123, true);

/* 
4. generic 타입 - 1: any와 unknown 타입처럼 입력하는 타입을 아무거나 넣을 수 있는 타입이 존재, generic을 사용하게 되면 입력되는 타입에 따라 변경되며, 타입 추론까지 이루어짐
*/
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  // generic타입: 내가 만든 타입을 사용한다는 의미로 <> 안에 정의
  return [arg3, arg2, arg1];
} // 들어오는 타입에 따라서 MyType이 설정되기 때문에, Type의 변화가 무궁무진함 -> 5. 들어올 때부터 타입 정의 가능
const result4 = getGeneric("철수", 123, true); // 어떤 타입이 들어오든 상관없으며, 들어오는 타입에 따라 Mytype이 설정됨, result4를 보면 타입이 추론된 것을 확인 가능

/* 
5. 들어올 때부터 타입 정의 가능 
*/
function getGeneric1<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result5 = getGeneric<string, number, boolean>("철수", 123, true); // 타입 명시: <> 내에 타입을 지정해 줌으로써, MyType에 대한 타입들을 고정시켜준 것

/* 
6. generic 타입 - 2~4(축약버전): generic을 다양한 축약 버전으로 사용 가능
*/
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric2<string, number, boolean>("철수", 123, true);

function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result7 = getGeneric3<string, number, boolean>("철수", 123, true);

// => 함수 사용
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result8 = getGeneric4<string, number, boolean>("철수", 123, true);
