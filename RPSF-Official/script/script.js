const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors', 'fire', 'water'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'fire')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'water')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'water')) ||
        (playerChoice === 'fire' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
        (playerChoice === 'water' && (computerChoice === 'fire' || computerChoice === 'rock'))
    ) {
        playerScore++;
        return 'Player wins!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        resultDisplay.textContent = `Player: ${playerChoice}, Computer: ${computerChoice}. ${result}`;
        scoreDisplay.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    });
});