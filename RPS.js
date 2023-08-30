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
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


console.log(playRound (playerSelection, computerSelection));