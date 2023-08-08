
const addcount = (function(){
    let count  = 0;
    let fn = function (){
        count++;
        return count;
    };
    return fn;//함수 자체를 리턴함.
})();//즉시 실행할 수 있도록 변경

// const fn = () => {
//     console.log("fn function");
//     document.getElementById("result").innerHTML = addcount();
// }

document.getElementById('count-button').onclick=function (){
    document.getElementById('result').innerHTML = addcount();
}