
const weaponChoice = ["rock", "paper", "scissor"]

let playerScore = 0
let computerScore = 0
let roundWinner = ""
let roundMsg = ""
let gameContinue = true
let gameWinner = ""
let roundNum = 0


const rockClick = document.getElementById("rock")
const paperClick = document.getElementById("paper")
const scissorClick = document.getElementById("scissor")
const restartClick = document.getElementById("restartBtn")


rockClick.addEventListener("click", ()=> handleClick("rock"))
paperClick.addEventListener("click", ()=> handleClick("paper"))
scissorClick.addEventListener("click", ()=> handleClick("scissor"))
restartClick.addEventListener("click", ()=> restartGame())




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
        document.getElementById("blueBorder").textContent = playerScore
        roundMsg = `You win.\n ${playerSelection} beat ${computerSelection}`
    } else if (roundWinner === "computer"){
        computerScore += 1
        roundMsg = `You lose.\n ${computerSelection} beat ${playerSelection}`
        document.getElementById("redBorder").textContent = computerScore
    } else {
        roundMsg = `It is a tie. \nBoth choose ${playerSelection}. `
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

function displayRoundMsg(roundMsg){
    document.getElementById("roundMsg").textContent = roundMsg
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
        document.getElementById("roundNum").textContent = roundNum

        let computerSelection = getRandomChoice()

        updateChoice(playerSelection, computerSelection)
        if(roundNum !== 1){
            removeChoice()
        }
        roundWinner = playRound(playerSelection, computerSelection)
        updateScore(roundWinner, playerSelection, computerSelection)
        displayRoundMsg(roundMsg)
        checkGameCont()
        generateEndMsg(gameWinner)

    }


}

function generateEndMsg(gameWinner){
    let endMsgCont = document.querySelector("#endMsg")
    if (gameWinner === "player"){
        console.log("player win")
        const endMsg = document.createTextNode("You win this game :)");
        endMsgCont.append(endMsg)

        let msg = document.querySelector(".restartBtn")
        msg.classList.remove("restartBtn")


    } else if(gameWinner=== "computer"){
        console.log("robot win")
        const endMsg = document.createTextNode("You lose this game :(");
        endMsgCont.append(endMsg)

        let msg = document.querySelector(".restartBtn")
        msg.classList.remove("restartBtn")
    }
}

function restartGame(){

    location.reload()

}
