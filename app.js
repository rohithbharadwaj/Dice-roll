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
var dice;

console.log(Math.round() * 6);

