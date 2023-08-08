let intervelId;

document.getElementById('time_button')
.onclick=function (){
    intervelId=setInterval(()=>{
        console.log('start');
        let date = new Date().getSeconds();
        document.getElementById('date').innerHTML=`<h1>${date.toString()}</h1>`;
    },1000);
}


document.getElementById('time_button2')
    .onclick=function (){
    console.log('stop');
    clearInterval(intervelId);
}