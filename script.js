const gameCells = document.querySelectorAll('cell');
const player1 = document.querySelector('player1');
const player2 = document.querySelector('player2');
const restartBtn = document.querySelector('restartBtn');

//making variables
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

//Function to start your  game  
const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            console.log (e.target);
        0});
    });
}
