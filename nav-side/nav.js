
const navBar = document.querySelector('.hambuger');

const navClose = document.querySelector('.close-nav');

let nav = document.querySelector('.nav_toggle');

navBar.addEventListener('click', ()=>{
    nav.classList.add('nav-toggle1');
    navBar.classList.add('hambuger-toggle')

})


navClose.addEventListener('click', ()=>{
    nav.classList.remove('nav-toggle1')
    navBar.classList.remove('hambuger-toggle')

})
