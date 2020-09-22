
var openModal = document.querySelector('.btn__modal');

var modalOverlay = document.querySelector('.modal-overlay');

var closeOl = document.querySelector('.cross');


openModal.addEventListener('click', function(){
    modalOverlay.classList.toggle('modal-container--active')
})

closeOl.addEventListener('click', ()=>{
    if(modalOverlay.classList.contains('modal-container--active')){
        modalOverlay.classList.remove('modal-container--active')
    }

})