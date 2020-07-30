
let check = 1;

var restart = document.querySelector('#restart');

var squares = document.querySelectorAll('td');

restart.addEventListener('click', gameRestart);

squares.forEach(function(element){
        element.addEventListener('click', turn);
        // element.addEventListener('click', ()=>{console.log(check)});
    });
    
function turn(){
    if (check === 2){
        if (this.textContent === ''){
            this.textContent = 'X';
            console.log(this)
            check = 1;
        }else {
            alert('already taken')
            check = 2;
        }
            
    }else if (check = 1) { 
        if (this.textContent === ''){
            this.textContent ='O';
            console.log(this)
            check = 2
        }else {
            alert('Box taken')
            check = 1;
        }
    }
    console.log(check)
};

function gameRestart(){
    for (var i = 0; i< squares.length; i++){
        squares[i].textContent = '';
    }
} 

const wins = [
    [1,2,3],
    [3,4,5],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [9,5,1],
    [3,5,7],
    [7,5,3]
]


