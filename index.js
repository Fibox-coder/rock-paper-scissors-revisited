let resetButton = document.getElementById('resetBtn')
let iconAfterWinner = document.getElementById('gameWinner')
// let iconAfterWinner = document.querySelectorAll('noClickIcon')
// iconAfterWinner.style.cssText = 'display: inherit;'
// document.getElementById('rockCopy').

let choices = ["rock", "paper","scissors"]
let winners = [];
let pWinCount = 0
let cWinCount = 0
let icons = document.querySelectorAll(".icon")

// gets the id of the icon you clicked and starts the game
function startGame(){
  icons.forEach((icon) =>
    icon.addEventListener(('click'), () =>{
      if (icon.id){
        playRound(icon.id);                 // Plays one round and returns the winner in an Object
        scoreBoard();                       // Keeps the scoreboard up to date
        winnerOfGame(pWinCount, cWinCount); // Winner of the game after 5 round wins
      }
    })
  )
} 

// picks one of the choices randomly
function computerSelect(){
  return choices[Math.floor(Math.random()*choices.length)];
}


// checks who won the game this round
function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC){
    return 'Tie';
} else if ((choiceP === "rock" && choiceC === "scissors") ||
           (choiceP === "paper" && choiceC === "rock") ||
           (choiceP === "scissors" && choiceC === "paper")
           ){
    return "Player";
} else{
    return "Computer"
}
}

// Plays one round and returns the winner in an Object
function playRound(playerChoice){
  let computerChoice = computerSelect();
  let winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);

  let displayChoicePlayer = document.getElementById('playerPick')
  displayChoicePlayer.textContent = `You picked: ${playerChoice}`

  let displayChoiceComputer = document.getElementById('computerPick')
  displayChoiceComputer.textContent = `The Computer picked: ${computerChoice}`

  let displayWinnner = document.getElementById('display-winner')
  displayWinnner.textContent = winner
  displayWinnner.style.cssText = "box-shadow: 0px 0px 20px 2px orange;"
  

  return winners
}

// returns player wins
function countPlayer(object) {
    pWinCount = winners.filter((item) => item == "Player").length
    let displayScorePlayer = document.getElementById('player-score')
    displayScorePlayer.textContent = pWinCount
  return pWinCount
}

// returns computer wins
function countComputer(object){
    cWinCount = winners.filter((item) => item == "Computer").length
    let displayScoreComputer = document.getElementById('computer-score')
    displayScoreComputer.textContent = cWinCount
  return cWinCount
}

// Keeps score board up to date
function scoreBoard(){
  countPlayer(winners); 
  countComputer(winners);
}

// Winner of the game after 5 round wins
function winnerOfGame(playerCount, computerCount) {
  let theWinner = document.getElementById('winner-of-game')
  if (playerCount == 5){
    theWinner.textContent = "You won the game!"
    theWinner.style.cssText = "box-shadow: 0px 0px 20px 2px orange;"
    showResetButton()
    gameWinner.style.cssText = "display: flex;"

  } else if (computerCount == 5){
    theWinner.textContent = "The Computer won the game!"
    theWinner.style.cssText = "box-shadow: 0px 0px 20px 2px orange;"
    showResetButton()   
    gameWinner.style.cssText = "display: flex;"
  } 
}



startGame()

// resets the game
let reset = function(){
  window.location.reload();
}
resetButton.onclick = reset;

let showResetButton = function(){
  resetButton.style.cssText = "display: inherit;"
}

