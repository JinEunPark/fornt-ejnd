let nameList_right = new Array();
let nameList_left = [1,2,3];
const CLASSNAME = "names";
const Id_PREFIX = 'list';
let name_count = 0;

let move_list = [];
let input_tag = document.getElementById('multi');
let input_button = document.getElementById('input_button');
let right_button = document.getElementById('move_right');
let left_button = document.getElementById('move_left');

let form = document.getElementById('name_form');

let scroll_box1 =  document.getElementById('scroll_box_1');
let scroll_box2 =  document.getElementById('scroll_box_2');



let input_value = ()=>{
    let input = input_tag;

    nameList_left.push(input.value);
    name_count++;

    let new_li = document.createElement('li');

    new_li.setAttribute('class',CLASSNAME);
    new_li.setAttribute('id',Id_PREFIX+name_count);

    let text = document.createTextNode(input.value);

    new_li.appendChild(text);
    scroll_box1.appendChild(new_li);

    new_li.addEventListener('click', ()=>{
        console.log(new_li);
        move_list.push(new_li);
        new_li.setAttribute('background-color','silver');
    });
    input.value='';

}

input_button.addEventListener('click',input_value);
form.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input_button.click();

    }
});

right_button.addEventListener('click',()=>{
    for(let child of move_list){
        console.log('right!')
        scroll_box2.appendChild(child);
        // scroll_box1.removeChild(child);
    }
    move_list = [];
});

left_button.addEventListener('click',()=>{
    for(let child of move_list){
        console.log('left');
        scroll_box1.appendChild(child);
        // scroll_box2.removeChild(child);
    }
    move_list = [];
});





