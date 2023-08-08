// document.getElementById("input_button").addEventListener('click',function(){
//    let su1 = document.getElementById('su1').value;
//    let su2 = document.getElementById('su2').value;
//
//    let result = Number(su1) + Number(su2);
//
//    let resultDiv = document.getElementById('result');
//    resultDiv.innerHTML=`<h2>${result}</h2>`;
// });


// const setClock=()=>{
//    let date = new Date().getUTCDate().toString();
//    document.getElementById("date").innerHTML=(date);
// }

// document.getElementById('time_button').addEventListener('click',function (){
//    setClock();
//    setInterval(setClock,1000);
// });



let[k1,...k2] = ['test1','test2','test3','test4','test5','test6']
console.log(k1);//test1

console.log(k2);//[ 'test2', 'test3', 'test4', 'test5', 'test6' ] 나머지는 전부 마지막으로 감.

