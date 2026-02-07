let humanScore = 0;
let computerScore = 0;
let humanSelection = "";

function getComputerChoice(){
    const arr = ["Rock","Paper","Scissors"];
    let move = arr[Math.floor(Math.random()*3)];
    return move;
}



/*function getHumanChoice(){
    let choice = prompt("Enter choice: ");
    return choice;
}*/

function increment(scoreLabel){
    const scoreArr = scoreLabel.split(":");
    let score = parseInt(scoreArr[1], 10);
    score++;
    const stringScore = score.toString();
    scoreLabel = scoreArr[0] + ": "+stringScore;
    return scoreLabel;
}

const RockButton = document.getElementById("Rock");
const PaperButton = document.getElementById("Paper");
const ScissorButton = document.getElementById("Scissors")

RockButton.addEventListener("click", () => {
    playRound("Rock",getComputerChoice());
})

PaperButton.addEventListener("click", () => {
    playRound("Paper",getComputerChoice());
})

ScissorButton.addEventListener("click", () => {
    playRound("Scissors",getComputerChoice());
})

function checkWinner(){
    const results = document.getElementById("resultLabel");
    if(computerScore === 5){
        results.textContent = "You lost! The computer won!";
        }else if(humanScore === 5){
            results.textContent = "You won! Well done!";
}
}



function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors"){
        const results = document.getElementById("resultLabel");
        computerScore++;
        results.textContent = "You lose! Scissors beats Paper!";
        const compLabel = document.getElementById("compScore");
        compLabel.textContent = increment(compLabel.textContent);
        checkWinner();
    }
   

    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Paper"){
         const results = document.getElementById("resultLabel");
         computerScore++;
         results.textContent = "You lose! Paper beats Rock!";
         const compLabel = document.getElementById("compScore");
         compLabel.textContent = increment(compLabel.textContent);
         checkWinner();
    }

     else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock"){
        const results = document.getElementById("resultLabel");
        computerScore++;
        results.textContent = "You lose! Rock beats Scissors!";
        const compLabel = document.getElementById("compScore");
        compLabel.textContent = increment(compLabel.textContent);
        checkWinner();
    }

      else if(humanChoice.toLowerCase() === "paper" && computerChoice === "Rock"){
        const results = document.getElementById("resultLabel");
        humanScore++;
        results.textContent = "You win! Paper beats Rock!";
        const humanLabel = document.getElementById("humanScore");
        humanLabel.textContent = increment(humanLabel.textContent);
        checkWinner();
    }

     else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors"){
        const results = document.getElementById("resultLabel");
        humanScore++;
        results.textContent = "You win! Rock beats Scissors!";
        const humanLabel = document.getElementById("humanScore");
        humanLabel.textContent = increment(humanLabel.textContent);
        checkWinner();
    }

     else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper"){
        const results = document.getElementById("resultLabel");
        humanScore++;
        results.textContent = "You win! Scissors beats paper";
        const humanLabel = document.getElementById("humanScore");
        humanLabel.textContent = increment(humanLabel.textContent);
        checkWinner();
    }

     else {
        const results = document.getElementById("resultLabel");
        results.textContent = "Draw!";
    }

}

/*function playGame(){
   
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);

}
*/

