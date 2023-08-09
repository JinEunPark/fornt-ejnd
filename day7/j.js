document.getElementById('append')
.addEventListener('click', function(e){
    console.log(e.target);
    e.preventDefault();//원래 수행되는 이벤트 동작을 막음
    let text = document.getElementById('irum');
    let data=irum.value; //data 생성
    let txt = document.createTextNode(data);//text node 를 생성함
    let ele_li = document.createElement('li');
    ele_li.appendChild(txt);

    document.getElementById('result').appendChild(ele_li);

    irum.value=" ";


});