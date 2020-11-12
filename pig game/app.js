/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
// global declearation
var roundScore, activePlayer, players,gamePlaying, inputt, winningScore;

newgame();

document.querySelector('.text').addEventListener('input', function(){
    console.log(typeof(this.value), Number(this.value))
    if (typeof(Number(this.value)) === NaN || this.value === '' ){
        winningScore = 100;
        

    }else{
        winningScore = Number(this.value)
    }
})


// document.querySelector('#current-' + activePlayer).innerHTML = `<em> ${dice}</em>`;

// setting the dice img to display none as default
displayEffect('none');


// getting the  two players panel
players = [document.querySelector('.player-0-panel'), document.querySelector('.player-1-panel')]


// var x = document.querySelector('#score-1').textContent;

// console.log(x);

// getting the roll-on button from the DOM and configuring it


document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlaying){
        // 1. setting random number 
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        
        // 2. displaying right img of the dice
        displayEffect('block')
        document.querySelector('#dice1').src = `dice-${dice}.png`
        document.querySelector('#dice2').src = `dice-${dice1}.png`
    
        // console.log(`dice-${dice}.png`)
    
    
        // update the round score IF the rolled(dice) number was Not a 1
        if (dice === 1 || dice1 === 1){
            //current round score
            init();
    
        }else if (dice === 6 && dice1 ==6){
            init();
            document.querySelector('#score-'+ activePlayer).textContent = 0;

        }else{
            roundScore += dice + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        };  
    
    }
    
        

});


document.querySelector('.btn-hold').addEventListener('click', function(){
        //1. add the current content to that of the score content(update scores)
        // scores[activePlayer] += roundScore
    if (gamePlaying){
        document.querySelector('#score-'+ activePlayer).textContent = Number(document.querySelector('#score-' + activePlayer).textContent)
            + Number(document.querySelector('#current-' + activePlayer).textContent);
        
        if (document.querySelector('#score-'+ activePlayer).textContent >= winningScore){
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner')
            displayEffect('none')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')

            // document.querySelector('.btn-hold').removeEventListener('click');
            // document.querySelector('.btn-roll').removeEventListener('click');
            // console.log(this)
            gamePlaying = false;
        }else{
            init();
            
        }
    }
        
    // console.log(this);
});





document.querySelector('.btn-new').addEventListener('click', function(){
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner')
    newgame();
    if (players[0].classList.contains('active')){
       
    }else{
        players[0].classList.add('active')
        players[1].classList.remove('active')
    };
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';

})




function newgame(){
    roundScore = 0;
    gamePlaying = true;
    // dl of active player indicator
    activePlayer = 0;
    winningScore = 100;
    displayEffect('none');
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('.text').value = '';
}

function init(){
    roundScore = 0

    // setting the active current content back to zero

    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    // set the display to none 
    displayEffect('none');

    //2. change of active players
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    
    //3. toggle of active class 
    players.forEach(element => {element.classList.toggle('active')})
}



function displayEffect(value){
    if (value == 'block'){
      document.querySelectorAll('.dice').forEach(element =>element.style.display = 'block');


    }else{
        document.querySelectorAll('.dice').forEach(element => element.style.display = 'none');

    }
}

