function fn_move1() {
  console.log("move");
  console.log("move2");
}

fn_move1();
fn_move1();

function fn_move2(irum, age) {
  console.log(`name: ${irum}, age: ${age}`);
  console.log("움직입니다");
}

fn_move2("박진은", 25);

function getSu() {
  let su = 100;
  return su;
}

let su = getSu();
console.log("su", su);

function add(a, b) {
  return a + b;
}

let su1 = 10;
let su2 = 20;

let result = add(su1, su2);
console.log("result", result);

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

class Person {
  constructor(pname, age) {
    this.pname = pname;
    this.age = age;
  }

  fight = function (who, appose) {
    return `${who} 는 ${appose} 와 싸운다`;
  };
    
  write(text) {
    return text;
  }
}

Person.prototype.gteet = function () {
  console.log(`안녕하세요', ${this.pname}입니다`);
};

const person1 = new Person("박진은");
const person2 = new Person("wlsdms");
person1.gteet();
person2.fight("박지은", "qkrwlsdms");


