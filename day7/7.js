"use strict"
let a1 = [10, 20, 30];
let a2 = a1;
console.log(a1 == a2);
a1.forEach(item => {
    console.log('item', item);
});

a2[1] = 100;
console.log('=====================');

a1.forEach(
    item => {
        console.log('item', item);
    }
);


let newArr = Object.assign([], a1);
console.log('newArr', newArr);
console.log('newArr==a2', newArr === a1);


let emails = ['w@com', 'adasdaSd'];
let tokenizer = (email) => {
    let tokens = email.split('@');
    return tokens;
}

let finder = (emails) => {
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].indexOf('@') != -1) {
            return emails[i];
        }
    }
}

let result = function (emails) {
    console.log(tokenizer(finder(emails)));
}

result(emails);

let arr = new Array();
console.log(arr);
arr = arr.concat(1, 2, 3, 12, 3, 12, 31, 23, 213, 2, 3, 13, 1);
console.log(arr);


// arr.find(()=>{
//     closed
// })

let arr3 = [1, 2, 3, 1, 2, 3];
console.log(arr3.find((i) => 2 < i));
console.log(arr3.filter((i) => 2 < i));
console.log(arr3.shift());
console.log(arr3);
console.log(arr3.unshift(...arr));
console.log(arr3);


// document.getElementById("b").onclick=()=>{
//     let irums = ["박","김","나"];
//     document.getElementById("result1").innerHTML = (()=>{
//         let result =  irums.map(i=>`<li>${i}</li>`);
//         return result.join(" ");//자동으로 콤마를 삽입함
//     })();
//
//     document.getElementById("result2").innerHTML = (()=>{
//         let result = []
//         irums.forEach(i=>result.push("<li> i </li>"));
//         return irums.join(" ");
//     })();
// }
//
// let a =10;
// try{
//
//
//     throw new Error("미성년자 꺼져");
// }catch(e){
//     console.log("catch");
//     console.log(e);
// }finally{
//     console.log('finally');
// }

let age = 0;
let ageValidator = (age) => {
    try {

        if (Number.isNaN(age)) {
            throw new Error('please input the number');
        }

        if (age < 0) {
            throw new Error("please enter right age");
        }
        if (age < 20) {
            throw new Error("adult only");
        }

        if (age > 80) {
            throw new Error("eldery plase take care your self");
        }
        alert('wellcome!!');

    } catch (e) {
        alert(e);
    } finally {
        console.log("thank you for your service!!");
    }
}

document.getElementById("b").onclick = () => {
    let age = document.getElementById("age").value;
    ageValidator(Number(age));
}








































