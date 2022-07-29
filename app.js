function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3) + 1;
    return selection;
}

function getPlayerChoice() {
    do {
        var playerSelection = prompt("Choose wisely... 'Paper', 'Rock', or 'Scissors'.....");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == 'rock'){
            return 1;
        } else if (playerSelection == 'paper'){
            return 2;
        } else if (playerSelection == 'scissors'){
            return 3;
        } else {
            playerSelection = '';
        }
    } while (playerSelection == '');
    
}



function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Yall tied that Round');
        return 0;
    }
    if (playerSelection == 1 && computerSelection == 2){
        compScore += 1;
        console.log('Computer won that round');
        return 0;
    }

    if (playerSelection == 1 && computerSelection == 3){
        playerScore += 1;
        console.log('You won that round');
        return 0;
    }

    if (playerSelection == 2 && computerSelection == 1){
        playerScore += 1;
        console.log('You won that round');
        return 0;
    }

    if (playerSelection == 2 && computerSelection == 3){
        compScore += 1;
        console.log('Computer won that round');
        return 0;
    }
    

    if (computerSelection == 3 && playerSelection == 1){
        playerScore += 1;
        console.log('You won that round');
        return 0;
    }

    if (computerSelection == 3 && playerSelection == 2){
        compScore += 1;
        console.log('Computer won that round');
        return 0;
    }
}

function game() {
    var playerScore = 0;
    var compScore = 0;
    while (playerScore < 5 && compScore < 5) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        singleRound(playerSelection, computerSelection);
    }

    if (playerScore == 5) {
        console.log('You won the game');
    } else {
        console.log('You lost... Cant even beat a computer');
    }
    
    return console.log('end of game....');
}