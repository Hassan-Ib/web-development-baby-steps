var display = document.querySelector('#number');

const btnReset = document.querySelector('#btn-r');

const btnDecrease = document.querySelector('#btn-d');

const btnIncrease = document.querySelector('#btn-i');


btnReset.addEventListener('click', ()=>{
    display.textContent = 0
    display.style.color = 'black'
})

btnIncrease.addEventListener('click', ()=>{
    var add = Number(display.textContent) + 1;

    display.textContent = add;

    if (Number(display.textContent) == 0){
        display.style.color = 'black'
    }
    else if (Number(display.textContent) > 0 ){
        display.style.color = 'blue'
    }
})

btnDecrease.addEventListener('click', ()=>{
    var subtract = Number(display.textContent) - 1;

    display.textContent = subtract;
    
    if (Number(display.textContent) == 0){
        display.style.color = 'black'
    }
    else if (Number(display.textContent) < 0 ){
        display.style.color = 'red'
    }
    

})