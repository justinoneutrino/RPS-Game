function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    
    if (guess === 0) {
        return 'Rock';
    }
    else if (guess === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}



let playerScore = 0;
let computerScore = 0;




function game() {
    for (let i = 0; i < 5; i++) {
      const  playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors.")
      const  computerSelection = getComputerChoice();
      const  result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (i === 4 && playerScore > computerScore) {
        return finalResult = "Congrats, you won!";
        console.log(finalResult)
      }
      else if (i === 4 && playerScore < computerScore) {
        return finalResult = "Boo, you lost!";
        console.log(finalResult)
      }
      
    } 
}



function playRound(playerSelection, computerSelection) {
    const lowerPlayerSelection = playerSelection.toLowerCase();

    if (lowerPlayerSelection === computerSelection) {
        return "It's a draw!"
    }
    else if (
    (lowerPlayerSelection === 'rock' && computerSelection === 'Scissors') || 
    (lowerPlayerSelection === 'paper' && computerSelection === 'Rock') ||
    (lowerPlayerSelection === 'scissors' && computerSelection === 'Paper'))
    {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

console.log(game());



