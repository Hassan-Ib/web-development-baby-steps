
const preloader = document.querySelector('.preloader')

const btn = document.querySelector('.btn__container');

const video = document.querySelector('.video');

console.log(btn)
const switchDisplay = document.querySelector('.switch')

window.addEventListener('load', ()=> preloader.classList.add('hide__preloader'));

btn.addEventListener('click', function(){
    // btn.classList.toggle('slide')
    if (btn.classList.contains('slide')){
        btn.classList.remove('slide')
        video.play();
    }else{
        btn.classList.add('slide')
        video.pause();
    }
});


