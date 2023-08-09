// document.getElementById('window_open')
//     .onclick = () => {
//     // location.href="https://www.naver.com"
//     document.write("hello!!!!");
// };
//
// let d = document.body;//body 내부에 모든 정보가 담겨 있음
// let list = document.getElementById('listId1');
// let list_class = document
//     .getElementsByClassName('list_class');
//
// let tagname = document.getElementsByTagName('li')[3];
// let names = document.getElementsByName('irum');
// let listes = document.getElementsByClassName('list_class');
// console.log(listes
// );
// console.log(names);
// console.log(d);
// console.log(list_class);
// console.log(tagname);
//
// let child1 = document.body.children;
// console.log(child1);
// document.getElementsByClassName()

// document.getElementById('change').addEventListener('click',function(){
//     const body = document.getElementsByTagName('body')[0];
//     body.style.backgroundColor='yellow';
// });
//
//
// let layoutImgs=document.getElementsByClassName('image_tag');
//
// for(let layout of layoutImgs){
//     layout.addEventListener('mouseover',function (){
//         for(let i = 0; i < layoutImgs.length; i++){
//             layoutImgs[i].style.border='';
//         }
//         layout.style.border='10px solid yellow';
//     });
//
// }


let greens = document.querySelectorAll('.red');

for(let g of greens){
    g.addEventListener('mouseover',()=>{
        if(this.getAttribute('class') ==='red'){
            this.setAttribute('class','green');
        }else{
            this.setAttribute('class','red');
        }
    });
}






