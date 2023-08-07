// function fn_move1() {
//   console.log("move");
//   console.log("move2");
// }
//
// fn_move1();
// fn_move1();
//
// function fn_move2(irum, age) {
//   console.log(`name: ${irum}, age: ${age}`);
//   console.log("움직입니다");
// }
//
// fn_move2("박진은", 25);
//
// function getSu() {
//   let su = 100;
//   return su;
// }
//
// let su = getSu();
// console.log("su", su);
//
// function add(a, b) {
//   return a + b;
// }
//
// let su1 = 10;
// let su2 = 20;
//
// let result = add(su1, su2);
// console.log("result", result);

// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   prt = function () {
//     console.log(this_name, this_age);
//   };
// }

// Person.prototype.draw = function () {
//   console.log("draw method");
// };

// let p1 = new Person("hong", "20");
// console.dir(p1);
//
// class Person {
//   constructor(pname, age) {
//     this.pname = pname;
//     this.age = age;
//   }
//
//   fight = function (who, appose) {
//     return `${who} 는 ${appose} 와 싸운다`;
//   };
//   write(text) {
//     return text;
//   }
// }
//
// Person.prototype.gteet = function () {
//   console.log(`안녕하세요', ${this.pname}입니다`);
// };
//
// const person1 = new Person("박진은");
// const person2 = new Person("wlsdms");
// person1.gteet();
// person2.fight("박지은", "qkrwlsdms");
//
//
// prt()
//
// function prt(){
//   console.log("this is prt");
// }
//
// const prt2 = function(irum, age){
//   console.log(irum);
//   console.log(age);
// }
//
// prt2("this is ",100);
//
// const show = function (...irum){
//   console.log(...irum
//   );
// }
//
// // spread 연산자는 배열에서도 사용 할 수 있습니다.
// show(1,2,3,2,1,2,3,1,2,3);
//
// //콜백함수 매개변수로 전달하는 함수 메서ㅡ 실
// // 해ㅇ시에 자동으로 호ㅜ되는 함수 filter foreach every, map some
// const tot = function(x,y){
//   return x+y;
// }
// let fn = function (a,bm, tot){
//   let result = tot(a,b);
//   console.log(result);
// }
//
// let t1 = [10,20,30];
// let t2 =[100,200,300]
//
// const obj1={name:'hong',age:10};
// const obj2 = {name:'park', addr:'seoul'};
//
// const cloneobj1={...obj1};
// cloneobj1.nae='test'
// console.log('obj1',obj1);//객체가 깊은 연산이 됨
// console.log(cloneobj1);

// let add = function (a,b){
//   return a+b;
// }

// let tot = add(10,20);
// console.log(tot);
let prt=()=>"hong";
console.log(prt());

//함수가 한줄이며 반환값이 있을 때 위와 같이 표현함


let prt2=()=>{
  console.log('test1');
  console.log('test2');
}

//함수가 두줄 이상이면 arrow function 이라도 중괄호를 사용해야함.
let prt3=()=>(a,b)=>{
  console.log(a,b);
}

prt2();

// let fn = function(a,b, tot ){
//   let result = tot(a,b);
//   console.log(result);
//
//
// }

//위에서 전해진 함수 초인터를 전달해서 및에서 실행하므롷써 이것은 콜백함수이다.

[10,20,30].forEach((i)=>console.log(i));


