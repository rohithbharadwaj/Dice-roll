/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerScores = [0,0]; //main scores of player 1 and 2
var roundScore = 0;
var currentPlayer = 0; // 0 is first player and 1 is second player
//var dice;

//console.log(dice);
//access to DOM is document object
//we need elements from document object
//document.querySelector('#current-' + currentPlayer).textContent = dice;
//document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//here btn is called as call back function, so we are not adding () for btn
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //1. random number
    var dice = Math.floor(Math.random() * 6)+1 ;
    
    //2. display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3. update the round score only if the rolled number was not a 1.
    if(dice !== 1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    }else{
        //next player
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';


    }
});




