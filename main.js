const navbar = document.querySelector('nav');
const menu = document.querySelector('.ri-menu-3-line');
const menuIcon = document.querySelector('#menu-icon');

menu.addEventListener('click',()=>{
    menuIcon.classList.toggle('show-menu');

})


window.onscroll =()=>{
    if(window.scrollY>0){
        navbar.style.background='#fff';
    }
    else{
        navbar.style.background='transparent';

    }
}