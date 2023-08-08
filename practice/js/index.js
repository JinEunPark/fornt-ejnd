document.getElementById('nav_icon').addEventListener('click', function(){
    console.log('clicked');
    const nav = document.getElementById('navbar');
    let classList = nav.classList.toggle('toggling');

});