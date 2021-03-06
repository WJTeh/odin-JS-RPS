const selection = ["rock", "paper", "scissor"]
let playerScore = 0
let computerScore = 0
let gameContinue = true

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    let result = ""
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            result = "It is a tie! Both players choose Rock"
        } else if (computerSelection === "paper"){
            result = "You lose! Paper beats Rock"
            computerScore += 1
        } else {
            result = "You win! Rock beats Scissor"
            playerScore += 1
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "paper"){
            result = "It is a tie! Both players choose Paper"
        } else if (computerSelection === "scissor"){
            result = "You lose! Scissor beats Paper"
            computerScore += 1
        } else {
            result = "You win! Paper beats Rock"
            playerScore += 1
        }
    } else {
        if (computerSelection === "scissor"){
            result = "It is a tie! Both players choose Scissor"
        } else if (computerSelection === "scissrockor"){
            result = "You lose! Rock beats Scissor"
            computerScore += 1
        } else {
            result = "You win! Scissor beats Paper"
            playerScore += 1
        }
    }
    result += `\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
    return result
}

function game(){
    while(gameContinue){

        let computerPlay = () => selection[Math.floor(Math.random() * 3)]
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection))

        if (computerScore === 1 || playerScore === 1){
            gameContinue = false
        }
    }

    if (computerScore > playerScore){
        return "You lose!"
    } else if (computerScore < playerScore){
        return "You win!"
    } else {
        return "It is a tie!"
    }
}

//console.log(game())

let rock = document.getElementById("rock");
console.log(rock)
rock.addEventListener("click", ()=>{
    let playerSelection = "rock";
})

