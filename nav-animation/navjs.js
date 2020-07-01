
// getting the elements

const navButton = document.querySelector('.hambuger');

const containerToggle = document.querySelector('.container');



navButton.addEventListener('click', function(){
    console.log(containerToggle.classList.contains('container-toggle'));
    // if (containerToggle.classList.contains('container-toggle')){
    //     containerToggle.classList.remove('container-toggle');

    // }
    // else{
    //     containerToggle.classList.add('container-toggle')
        
    // }
    navButton.classList.toggle('line-toggle')
    containerToggle.classList.toggle('container-toggle')
})

