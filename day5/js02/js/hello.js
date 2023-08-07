// 객체는 중괄호 {… }를 이용해 만들 수 있습니다.중괄호 안에는 ‘키(key): 값(value)’ 쌍으로
// 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다.
// 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.
// 중괄호 {... }를 이용해 객체를 선언하는 것을 객체 리터럴(object literal) 이라고 부릅니다.
// 객체를 선언할 땐 주로 이 방법을 사용합니다.

// const { ScreenLockLandscape } = require("@material-ui/icons");

// let user = new Object();
// let user = {};

let user = {
  n: "john",
  age: 20,
};

console.log("user", user);
arr = ["arr", "arr2", "arr2"];
for (let item of arr) {
  console.log("item", item);
}

console.log("typeof user", typeof user);
console.log("user.n", user.n);
console.log("usr.age", user.age);

for (let x in arr) {
  console.log("x", x);
}

//배열에 사용하면 배열의 인덱스를 돌아가면서 출력함.

for (let key in user) {
  console.log("x", key);
}
//객체의 key 이름 iterable 하게 출ㄹ력

// let i = 10;
// while (i >= 2) {
//   console.log("i", i);
//   i -= 2;
// }

// let j = 10;
// while (j > 0) {
//   console.log("j", j);
//   j--;
// }

function Dtype(name, vlaue) {
  return {
    [name]: vlaue,
  };
}

let a = new Dtype("이름", "hong");
console.log(a);
