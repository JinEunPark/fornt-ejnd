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
//
//
// let greens = document.querySelectorAll('.red');
//
// for(let g of greens){
//     g.addEventListener('mouseover',()=>{
//         if(this.getAttribute('class') ==='red'){
//             this.setAttribute('class','green');
//         }else{
//             this.setAttribute('class','red');
//         }
//     });
// }

// let ele = document.querySelector('ul');
// console.log(ele.children);
// try{
//     if(!ele.hasChildNodes()){
//         throw new Error('there is on child');
//     }
//     console.log(ele.children[0]);
//     console.log(ele.firstChild);// li 사이의 white space 정보 때문에 문자열로 인식됨 따라서 자식 ele 중에 첫번째를 받고 싶다면 first element child 로 사용해야한다.
//     console.log(ele.firstElementChild);
//     console.log(ele.lastChild);
//     console.log(ele.nextElementSibling);
// }catch (e) {
//     console.log(e)
// }
//
// className
// classList
/*

 className:class attribute 값을 변경하거나 얻어올 때 사용함
 classList: class name 값을 사용해서 가져옴
*/
// let classNa =document.getElementById('2m');
// console.log(classNa.className);
// classNa.className='green';
// console.log(classNa.className);
// classNa.classList.add('yellow');
// console.log(classNa.classList);






let li_tags = document.getElementsByClassName('li_tag');
for(let li of li_tags){
    li.classList.add('green');
    li.addEventListener('click',()=>{
       let clist = li.classList;
        console.log('click!!');
       if(clist.contains('green')){
           clist.replace('green','red');
       }else{
           clist.replace('red','green');
       }
    });
}


let a =  document.getElementById('aaa').innerHTML="<p> hello </p>";


let trs = document.getElementsByTagName('tr');
for(let tr of trs){
    tr.addEventListener('click', ()=>{
        tr.classList.toggle('aaa');
    });
}
