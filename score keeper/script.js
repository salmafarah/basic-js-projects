let input = document.querySelector('#rounds')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
let player1Display = document.querySelector('#p1Score')
let player2Display= document.querySelector('#p2Score')
let roundsDisplay = document.querySelector('#playing')
const resetbtn = document.querySelector('.reset')

player1.addEventListener('click', playerScore1);
player2.addEventListener('click', playerScore2);
resetbtn.addEventListener('click', reset)
input.addEventListener('change', changeScore)


let p1score = 0
let p2score = 0
let gameOver = false; 
let winningScore = 5; 




function playerScore1(){
    if(!gameOver){
   p1score++
    if(p1score === winningScore){
        gameOver = true;
        player1Display.classList.add('green')
    }
   player1Display.innerHTML = p1score

    }

}

function playerScore2(){
    if(!gameOver){
   p2score++
    if(p2score === winningScore){
        gameOver = true;
        player2Display.classList.add('green')
    }
   player2Display.innerHTML = p2score

    } 

}


function reset(){
    gameOver = false 
    p1score = 0
    p2score = 0
    player1Display.innerHTML = 0
    player2Display.innerHTML = 0 
    player2Display.classList.remove('green')
    player1Display.classList.remove('green')
 
}

function changeScore(){
    winningScore  = parseInt(input.value)
    roundsDisplay.innerHTML = winningScore
    reset()
}
