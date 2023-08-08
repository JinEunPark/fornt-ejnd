

let arr = new Array();
let fn= (function(name){
    let count = 0;
    insert=(name)=>{
        arr.push(name);
        count++;
        return name+count;
    }

    return insert;
})();


document.getElementById('insert').onclick=()=>{
    let gtname = document.getElementById('input_name').value;
    let arr = fn(gtname);

    document.getElementById('result1').innerHTML+= `<h2>${arr}<h2>`;
}



document.getElementById('hole').onclick=()=>{
    for(let name of arr){
        document.getElementById('result2').innerHTML+=`<h2>${name}</h2>`
    }
}