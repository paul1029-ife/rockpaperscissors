const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = getComputerChoice();
    result = determineWinner(player, computer);
    updateUI(player, computer, result);

}));


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer){
    if (player === computer) {
        return "It's a tie!";
        } else if ((player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")) {
            return "Player wins!";
            } else {
                return "Computer wins!";
                }

}

function updateUI(player, computer, result){
    playerText.textContent = `You chose: ${player}`
    computerText.textContent = `Computer chose: ${computer}`
    resultText.textContent = result;

}