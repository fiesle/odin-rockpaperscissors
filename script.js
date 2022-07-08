const RPS = ["rock","paper","scissors"];

let playerScore = 0;
let computerScore = 0;

function playerPlay(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}

function computerPlay(){
    return RPS[Math.floor(Math.random()*RPS.length)];
}

function playRound(playerSelection,computerSelection){
    let result='';

    if(playerSelection===computerSelection){
        result = "It's a tie";
    }
    else if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            result = "You lost! Paper beats Rock";
            computerScore++;
        }
        else{
            playerScore++;
            result = "You won! Rock beats Scissors";
        }
    }

    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            playerPlay++;
            result="You won! Paper beats Rock";
        }
        else{
            computerScore++;
            result="You lost! Scissors beats Paper";
        }
    }
    else if(playerSelection==="scissors"){
        if(computerScore==="rock"){
            computerScore++;
            result = "You lost! Rock beats Scissors";
        }
        else{
            playerScore++;
            result = "You won! Scissors beats Paper";
        }
    }
    alert(result);
}

function game(){
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Please pick one! Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();

        playRound(playerSelection,computerSelection);
    }

    if(playerScore>computerScore){
        alert(`You won! The score is ${playerScore}-${computerScore}`);
    }
    else if(playerScore<computerScore){
        alert(`You lost! The score is ${playerScore}-${computerScore}`);
    }
    else
        alert("It's a tie! 2-2");
}

game();