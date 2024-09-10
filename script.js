const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('alertBox');

//making variables
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

player1.textContent =`Player 1: ${currentPlayer}`;
player2.textContent =`Player 2: ${nextPlayer}`;

//Function to start your  game  
const startGame = () => {
    gameCells.forEach(cell => {0
        cell.addEventListener('click', (e) => {
            if(e.target.textContent === '') {
            e.target.textContent = playerTurn;
            if(checkwin () ) {
               // console.log(`${playerTurn} is a winner!`); 
                showAlert(`${playerTurn} is a winner!`); 
                disableCells();  
            }
            else  if (checkTie()) {
               // console.log(`It's a  Tial`);
                showAlert(`It's a  Tial`);
                disableCells();
            }
            else{
                showAlert(`Turn for player:${playerTurn}`);
                changePlayerTrun();
            }

            }
        });
    });
}0

//function to change player's trun
const changePlayerTrun = () =>{
    // if(playerTurn ===currentPlayer){
    //     playerTurn = nextPlayer;
    // }
    // else{
    //     playerTurn = currentPlayer;
    // }
    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}
// Funtion to check win
const checkwin = () => {
    const winningConditions =
    [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,],
    ];
    for (let i = 0; i < winningConditions.length; i++) {
        const [pos1, pos2, pos3] = winningConditions[i];
        if(gameCells[post].textContent !== ''&&
            gameCells[pos1].textContent === gameCells[pos2].textContent &&
            gameCells[pos1].textContent === gameCells[pos3].textContent) {
                return true;
            } 
    }
    return false;
}
//function  to check for a tie

const checkTie = () => {
let emptyCellsCount = 0;
gameCells.forEach(cell >{
        if (cell.textContent=== '')  
        emptyCellsCount++;
    } 


//funtion to disable game-board cells after a win or tie
const disableCells = () => {
    gameCells.forEach(cell => {
        cell.removeEventListener(`click`,handleClick);
        cell.classList.add(`desable`);

     });
}
//Funtion  to restart game
const disableCells = () => {
    gameCells.forEach(cell =>{
        cell.textContentContent ='';
        cell.classList.remove(`disabled`);
            });
            startGame();
}
 //Function to show alert
 const showAlert =(msg) => {
    alertBox.style.display ="block";
    alertBox.textContent =msg;
    setTimeout(() => {  
        alertBox.style.display ="none";
    },3000);
 }
restartBtn.addEventListener(`click`, restarGame);
//Calling Start Game Function
 startGame();
