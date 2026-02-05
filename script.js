let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const arr = ["Rock","Paper","Scissors"];
    let move = arr[Math.floor(Math.random()*3)];
    return move;
}


function getHumanChoice(){
    let choice = prompt("Enter choice: ");
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    }
   

    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Paper"){
        console.log("You lose! Paper beats Rock!");
         computerScore++;
    }

     else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock"){
        console.log("You lose! Rock beats Scissors!");
         computerScore++;
    }

      else if(humanChoice.toLowerCase() === "paper" && computerChoice === "Rock"){
        console.log("You win! Paper beats Rock!");
        humanScore++;
    }

     else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors"){
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }

     else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper"){
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }

     else {
        console.log("Draw");
    }

}

function playGame(){
    for(let i = 0;i<5;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

}

playGame();