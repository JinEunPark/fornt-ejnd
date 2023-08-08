// const addname = (function (name){
//     let count  = 0;
//     let fn=function (name){
//         count++;
//         return name+count;
//     };
//     return fn;
// })();
//
// document.getElementById("name_button").onclick=function(){//버튼이 눌리면
//     let inputEle = document.getElementById("input_name");//html 을 가져오고
//     document.getElementById("result").innerHTML+="<li>"+ addname(inputEle.value)+"</li>";
//     //"클로져의 count 르 거쳐서 이름을 반환하는 함수"
//     //innerhtml 은 연산 존나 가능함
//
// }

/*
1. 함수 생성자
2.
*/

let person1 = new Object();
person1.name = "hong gill dng";
person1.age = 20;
person1.addr='seoul';//object 객체를 생성하고 그냥 객체에 점찍고 값 넣어주면 필드가 추가됨
console.log(person1);
console.log(typeof person1);
console.log(Array.isArray(person1));

function Man(name, age){
    this.name = name;
    this.age = age;
    this.prt=()=>{
        console.log(`name : ${this.name},  age:${this.age}`);
    }

}


let m1, m2;
m1 = new Man("m1",1);
m2 = new Man("m2",2);
m1.prt();
m2.prt();


console.log(m1.age,m2.name);
console.log(m1['age']);

const m3 = {irum:'hong', age:20, addr:'seoul'};
const m4 = {irum:'hong', age:21, addr:'seoul'};
console.log(m3['age']);
console.log(m4['age']);
console.log(m3['age']);

class Student{
    constructor(studentId, irum, age)
    {
        this.studentId = studentId;
        this.irum = irum;
        this.age = age;
        this.fn = function (){
            console.log("this is method");
            console.log(this);
        }
    }

}


let s1 = new Student(1,'jin',30);
let s2 = new Student(2,'ha',25);
console.log(s1,s2);
s1.fn();

s2.sayHello=()=>{
    console.log(this);
}
console.log(s2);

delete s2.sayHello;

console.log(s2);
s2.add =()=>{
    console.log("a");
}
console.log(s2)

s2['hi hello']='morning';
console.log(s2)


let e = 100;
const user={
    name:'user',
    [e]:20
}

console.log(user);

for(i in s2){
    let c = 0;
    console.log(i + '---------'+s2[i])
}


/*

* */