// let arr = new Array();
// let fn = (function (name) {
//     let count = 0;
//     insert = (name) => {
//         arr.push(name);
//         count++;
//         return name + count;
//     }
//
//     return insert;
// })();
//
//
// document.getElementById('insert').onclick = () => {
//     let gtname = document.getElementById('input_name').value;
//     let arr = fn(gtname);
//
//     document.getElementById('result1').innerHTML += `<h2>${arr}<h2>`;
// }

const t1 = Array.isArray();
const t2 = Array.isArray([]);
const t3 = Array.isArray({});
const t4 = Array.isArray([1]);
const t5 = Array.isArray(new Array());
const t6 = Array.isArray(Array.prototype);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);


document.getElementById('hole').onclick = () => {
    for (let name of arr) {
        document.getElementById('result2').innerHTML += `<h2>${name}</h2>`
    }
}