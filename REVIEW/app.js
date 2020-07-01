
var img = document.querySelector('img'); 

var author = document.querySelector('h4'); 

var jobs = document.querySelector('#job-title');

var review  = document.querySelector('#review');

const leftButton = document.querySelector('#left');

const rightButton = document.querySelector('#right');

const supriceButton = document.querySelector('.suprice-btn button');

 
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    const input = reviews[currentItem];

    img.src = input.img;
    author.textContent = input.name;
    jobs.textContent = input.job;
    review.textContent = input.text
})

const showPerson = function(){
    const newInput = reviews[currentItem]
    img.src = newInput.img;
    author.textContent = newInput.name;
    jobs.textContent = newInput.job;
    review.textContent = newInput.text
}



rightButton.addEventListener('click', function (){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0

    }
    showPerson()
        
})


leftButton.addEventListener('click', function (){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1;

    }
    showPerson()
    
})

 // the suprice button code goes here
supriceButton.addEventListener('click', function(){
    var randomNum = Math.floor(Math.random() * reviews.length);
    currentItem = randomNum;
    showPerson();
})


