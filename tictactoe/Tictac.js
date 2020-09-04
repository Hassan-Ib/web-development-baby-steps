

let gameplay = 0;

let check = 0;

var restart = document.querySelector('#restart');

var squares = document.querySelectorAll('td');

restart.addEventListener('click', gameRestart);

// each possible win scenerio
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

squares.forEach(function(element){

    element.addEventListener('click', turns);
    
    // checking each possible win scenerio ... 

    // for all possible win scenerio i will have to check for either x or y

});
    
function turns(){
    if (gameplay === 0){
        if (check === 1){
            if (this.textContent === ''){
                this.textContent = 'X';
                // console.log(this.id);
                check = 0;
            }else {
                alert('already taken')
                check = 1;
            }
                
        }else if (check === 0) { 
            if (this.textContent === ''){
                this.textContent ='O';
                // console.log(this.id);
                check = 1
            }else {
                alert('Box taken')
                check = 0;
            }
        }
    
        // if combination of elements id are the same as any of the combination of win 
    
    
        for (let elements of wins){
            if (squares[elements[0]-1].textContent + squares[elements[1]-1].textContent 
                + squares[elements[2]-1].textContent === 'XXX' ||
                squares[elements[0]-1].textContent + squares[elements[1]-1].textContent 
                + squares[elements[2]-1].textContent === 'OOO'){
                
                document.querySelector('.winner').textContent = 'Palyer ' + ( check + 1 )+' Win'
                
                gameplay = 1
            }
        }
    }
    
    //     // let m = elements[0]
    //     // console.log(elements[0], squares[elements[0]-1].textContent)
    // }
    
};

function gameRestart(){
    for (var i = 0; i< squares.length; i++){
        squares[i].textContent = '';
    }
    check = 0
    document.querySelector('.winner').textContent = ''
    gameplay = 0

} 


// function 


// array to list Eloquent javaScript

// function arrayToList (arr){
//     if (arr.length === 1){
//         return { value:arr[0], rest: null };  
//     }else{
//     return { value:arr[0], rest: arrayToList(arr.slice(1)) };

//     };
// }





// array to list

// function arrayToList(arr){
//     let list = {};
//     for (let values = 1; values <=arr.length; values++){
//         if (arr.length === 1){
//             list.value = values;
//             list.rest = null
//             break;
//         }else{
//             list.value = values;
//             list.rest = {}

//         }
//     }
//     // return the list
//     return 
// };
// console.log(arrayToList([0,1,2,3,4]))

// let list = arrayToList([0,1,2])
// console.log(list)