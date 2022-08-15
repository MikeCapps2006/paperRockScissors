var playerScore = 0;
var compScore = 0;

function getComputerChoice() {
    const selection = Math.floor(Math.random() * 3) + 1;
    return selection;
}

function choices(playerChoice) {
    const compChoice = getComputerChoice();
    singleRound(playerChoice, compChoice);
    checkForWin();
    return 0;

}



function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('roundCounter').innerHTML = 'Yall tied that round';
        return 0;
    }
    if (playerSelection == 1 && computerSelection == 2){
        compScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose paper...Computer won that round';
        return 0;
    }

    if (playerSelection == 1 && computerSelection == 3){
        playerScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose scissors...You won that round';        
        return 0;
    }

    if (playerSelection == 2 && computerSelection == 1){
        playerScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose rock...You won that round';        
        return 0;
    }

    if (playerSelection == 2 && computerSelection == 3){
        compScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose scissors...Computer won that round';
        return 0;
    }
    

    if (computerSelection == 3 && playerSelection == 1){
        playerScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose scissors...You won that round';        
        return 0;
    }

    if (computerSelection == 3 && playerSelection == 2){
        compScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose scissors...Computer won that round';
        return 0;
    }

    if (computerSelection == 1 && playerSelection == 3){
        compScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose rock...Computer won that round';
        return 0;
    }

    if (computerSelection == 2 && playerSelection == 3){
        playerScore += 1;
        document.getElementById('roundCounter').innerHTML = 'Computer chose paper...You won that round';
        return 0;
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    document.getElementById('scores').style.display = "flex";
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
    hideOrShowSelectionBtns();
    document.getElementById('roundCounter').innerHTML = '';
    return 0;
}

function game() {
        resetGame();
}

function checkForWin(){
    if (playerScore == 5) {
        document.getElementById('scores').style.display = "none";
        document.getElementById('gameDeclaration').style.display = "flex";
        document.getElementById('gameDeclaration').innerHTML = 'You won the game!!!';
        hideOrShowSelectionBtns();
        return 1;
    } else if (compScore == 5) {
        document.getElementById('scores').style.display = "none";
        document.getElementById('gameDeclaration').style.display = "flex";
        document.getElementById('gameDeclaration').innerHTML = 'Computer won.... you suck!!!';
        hideOrShowSelectionBtns();
        return 2;
    } else {
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('compScore').innerHTML = compScore;
        return 0;
    }
}

function hideOrShowSelectionBtns(){
    const gameBtns = document.getElementById('gameButtons');
    const btnNewGame = document.getElementById('btnNewGame');
    const gameDeclaration = document.getElementById('gameDeclaration');
    if (gameBtns.style.display == 'block'){
        gameBtns.style.display = 'none';
        btnNewGame.style.display = 'block';
    } else {
        gameDeclaration.style.display = 'none';
        gameBtns.style.display = 'block';
        btnNewGame.style.display = 'none';
    }
}