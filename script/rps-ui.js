
const weaponChoice = ["rock", "paper", "scissor"]
let playerScore = 0
let computerScore = 0
let roundWinner = ""
let statusMsg = ""
let gameContinue = true
let gameWinner = ""
let roundNum = 0


const rockClick = document.getElementById("rock")
const paperClick = document.getElementById("paper")
const scissorClick = document.getElementById("scissor")


rockClick.addEventListener("click", ()=> handleClick("rock"))
paperClick.addEventListener("click", ()=> handleClick("paper"))
scissorClick.addEventListener("click", ()=> handleClick("scissor"))




function getRandomChoice(){
    return weaponChoice[Math.floor(Math.random() * 3)]
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundWinner = "tie"
    } else if(
        (playerSelection === "rock" && computerSelection === "scissor")||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "scissor" && computerSelection === "paper")){
        roundWinner = "player"
    } else{
        roundWinner = "computer"
    }
    return roundWinner
}


function updateScore(roundWinner, playerSelection, computerSelection){
    if (roundWinner === "player"){
        playerScore += 1
        statusMsg = `You win. ${playerSelection} beat ${computerSelection}`
    } else if (roundWinner === "computer"){
        computerScore += 1
        statusMsg = `You lose. ${computerSelection} beat ${playerSelection}`
    } else {
        statusMsg = `Both choose ${playerSelection}. It is a tie`
    }
}

function updateChoice(playerSelection, computerSelection){
    const weapons = document.querySelector(".weapon");
    let playerChoice = document.createElement("img");
    playerChoice.setAttribute("id", "playerChoice")

    switch (playerSelection){
        case "rock":
            playerChoice.src = "../picture/knock.png";
            break;
        case "paper":
            playerChoice.src = "../picture/hand.png";
            break;
        case "scissor":
            playerChoice.src = "../picture/two-fingers.png";
            break;
    }
    weapons.appendChild(playerChoice);


    let computerChoice = document.createElement("img");
    computerChoice.setAttribute("id", "computerChoice")

    switch (computerSelection){
        case "rock":
            computerChoice.src = "../picture/knock.png";
            break;
        case "paper":
            computerChoice.src = "../picture/hand.png";
            break;
        case "scissor":
            computerChoice.src = "../picture/two-fingers.png";
            break;
    }
    weapons.appendChild(computerChoice);
}

function removeChoice(){
    let weapons = document.getElementById("weapon");
    let playerChoice = document.getElementById("playerChoice")
    weapons.removeChild(playerChoice)

    let computerChoice = document.getElementById("computerChoice")
    weapons.removeChild(computerChoice)
}



function checkGameCont(){
    if ( playerScore === 5){
        gameContinue = false
        gameWinner = "player"
    } else if (computerScore === 5){
        gameContinue = false
        gameWinner = "computer"
    }
}

function endMessage(){
    if (gameWinner ==="player"){
        return "You win!"
    } else {
        return "You lose!"
    }
}

function handleClick(playerSelection){
    if (gameContinue){
        roundNum += 1
        console.log(roundNum)
        let computerSelection = getRandomChoice()

        updateChoice(playerSelection, computerSelection)
        if(roundNum !== 1){
            removeChoice()
        }
        roundWinner = playRound(playerSelection, computerSelection)
        updateScore(roundWinner, playerSelection, computerSelection)
        console.log(`${statusMsg}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`)
        checkGameCont()
    } else{
        alert(endMessage())
    }
}




