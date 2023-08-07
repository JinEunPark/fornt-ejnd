// "use strict";

// // const { SmsOutlined } = require("@material-ui/icons");

// // console.log("a", a);
// // let a = 20;
// //var 는 undifined 값을 넣어서 실행하기 때문에 undifined 값이 들어가도 오류가 안남 따라서 let, const 사용을 권장

// // 와 같이 단일 구문으로 사용합니다. 한글로는 "엄격 모드"로 사용합니다.

// // 자바스크립트 파일 전역으로, 또는 개별 함수 단위로 선언해서 사용할 수 있습니다.

// // 자바스크립트 파일 전역으로 선언을 할 때는 파일 맨 위에 작성해서 표시를 합니다.

// // 'use strict'는 자바스크립트의 의도치 않은 오류를 막아주는 수단으로 알려졌고, 또 그렇게 사용하고 있지만, 실제로는 조금 다르기도 하고, 사용상의 주의점도 여러 가지 있습니다.

// // 항상 그렇지만 잘 알고 사용하면 자바스크립트의 여러가지 잠재적인 오류를 막아주는데 많은 도움을 주지만, 잘못 사용하면 없던 오류를 새로 만들어내는 애물단지가 될 수도 있습니다.

// // let a = 30;
// // {
// //   let a = 10;
// //   console.log("block-a", a);
// // 블록 단위로 다른 값이 나오는 반면에 var 를 사용하면 전역변수 이기 때문에 같은 값이 생성된다.
// // }
// // console.log("global-1", a);
// var su = 100;
// {
//   var su = 10;
//   console.log(su);
// }
// console.log(su);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// //var 는 for 문에서 선언해도 다른 부분에서 사용가능함

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("I...", i);

// let tf = "";
// if (tf) console.log("true");
// else console.log("false");
// //자바 스크립트도 undifine 도 false, 그리고 single  quatation

// // let arr = [1, 2, 3];
// // console.log("arr", arr);

// // console.log("-----------");
// // console.log("typeof", typeof arr);
// // console.log("typeof", typeof arr);

// // console.log("typeof", typeof arr);

// // console.log("typeof", typeof arr);

// // let person = {};
// // console.log("person", person);
// // console.log("person", person);

// // console.log("person", person);

// // console.log("person", person);
// {
//   let a = "010";
//   let b = 20;
//   let c = a + b;
//   console.log("typeof c", typeof c);
//   console.log("c", c);
// }
// //string으로 취급됨

// {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log("typeof c", typeof c);
//   console.log("c", c);
// }
// //nmber 로 취급됨

// {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log("typeof c", typeof c);
//   console.log("typeof c 91", typeof (c / 2));
//   console.log("typeof c", typeof "10" / 2);
// }

// console.log(Boolean(""), Boolean(" ")); //false/ true
// console.log(Boolean(0), Boolean("0")); //false true
// console.log(Number("10"), Number("aa"), Number(null), Number(undefined)); //10 NaN 0 NaN
// console.log(String(0)); //0
// // a = "aa" / 10;
// // b = 20 / 0;
// // c = -20 / 0;
// // console.log(a);
// // console.log(b);
// // console.log(c);

// let name = "hong";
// let age = 20;
// let x = `hi ${name} ${age}`;
// console.log(`name: ${name}, age: ${age}`); // 수정된 템플릿 리터럴 구문
// console.log("x", x);

// let v1 = 10;
// let v2 = "10";
// console.log("114", v1 == v2); //값 비교는 자동 타입 변환에 의해서 같은 것으로 변환됨
// console.log("115", v1 === v2); //값 비교 이후

// let p1 = { name: "hong", age: 20 };
// let p2 = p1;
// let p3 = { name: "hong", age: 20 };
// console.log("120", p1 == p2); //값은 같다.
// console.log("121", p1 === p3); //값은 같은데 클래스는 다르다.
// console.log("122", p1 == p3); //값은 같은데 클래스는 다르다.

// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(false == ""); //true
// console.log(false == 0); //true
// console.log(false === 0); //false
// let a = 3;
// console.log("a>>", a >> 2);
// console.log("a<<2", a << 2);

// let arr = new Array(1, 2, 3, 4, 1, 2, 3, 12, 3, 12, 3);
// arr.forEach((e) => console.log("e", e));
// arr = arr.concat("a", "b"); //새로 반환함 주의할것 뒤에 연장해서 반환
// console.log("arr", arr);
// arr.forEach((i) => console.log("e", i));
// // arr = arr.join(""); //새로 생성해서 반환함
// console.log("arr", arr);
// arr.pop(); //마지막 요소를 제거함
// console.log("popped -arr", arr);

// const myArray = ["1", "2", "3"];
// const first = myArray.shift("a", "b");
// //shift() 메서드는 배열의 첫번째 요소를 제거하고 그 제거된 요소를 반환합니다.

// console.log("myArray", myArray, first);

// const myArray2 = ["1", "2", "3", "4", "5"];
// myArray2.splice(1, 3, "a", "b", "c", "d");
// // myArray 는 이제 ["1", "a", "b", "c", "d", "5"] 가 됩니다.
// // 이 코드는 첫 번째 인덱스("2"값이 있는 곳)에서 시작하여
// // 3개의 요소를 삭제한 후 그 자리에 연속된 모든 요소를 모두 삽입합니다.

// let myArray3 = [1, 2, [3, 4]];
// myArray3.flat();
// // myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

// const privates = new WeakMap();

// function Public() {
//   const me = {
//     // Private data goes here
//   };
//   privates.set(this, me);
// }

// Public.prototype.method = function () {
//   const me = privates.get(this);
//   // Do stuff with private data in `me`...
// };

// module.exports = Public;
let getResult = function (prop) {
  let sum = prop.reduce((acc, curr) => acc + curr, 0);
  let count = prop.filter((e) => e > 90).length;

  if (sum / prop.length > 90) {
    return "very good";
  } else if (count >= 1) {
    return "good";
  } else {
    return "stupid";
  }
};

document.getElementById("btn").onclick = function () {
  let elekor = document.getElementById("kor");
  let eleeng = document.getElementById("eng");
  let elemath = document.getElementById("math");
  let arr = [elekor.value, eleeng.value, elemath.value]; //input tag 에 의해서 읽은 자료를 가져욤
  console.log("arr", arr);

  arr = arr.map((element) => {
    return Number(element);
  });

  // arr = arr.map(i => Number(i));
  // 자바 람다 처럼 return 이 포함되어 있음...

  console.log("arr", arr);

  document.getElementById("result").innerHTML = "결과: " + getResult(arr);
};

let x = prompt("숫자를 입력하세요", 0);
x = x % 3;
let r;
switch (x) {
  case 0:
    r = "x%3 나머지 0 3배수";
    break;
  case 1:
    r = "x%4 나머지 1 4배수";
    break;

  case 2:
    r = "x%5 나머지 2 5배수";
    break;
}

alert(r);
