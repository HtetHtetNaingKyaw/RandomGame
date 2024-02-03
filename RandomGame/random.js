const computer = document.getElementById("computer");
const user = document.getElementById("user");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const result = document.getElementById("result");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const rock = document.getElementById("Rock");

const computerPicks = () => {
  let compChoices = ["Rock", "Paper", "Scissors"]; // Use uppercase for consistency
  let randomizeChoice = Math.floor(Math.random() * compChoices.length);
  return compChoices[randomizeChoice];
};
const check = () => {
  let computerSelection = computerPicks();
  user.textContent = playerSelection;
  computer.textContent = computerSelection;
  result.textContent = playRound(playerSelection, computerSelection);
};
//button click function
let playerSelection;
const rockcheck = () => {
  playerSelection = rock.id;
  check();
};

const scissorscheck = () => {
  playerSelection = scissors.id;
  check();
};

const papercheck = () => {
  playerSelection = paper.id;
  check();
};
//result part
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It is a tie";
  } else {
    switch (playerSelection) {
      case "Rock":
        return computerSelection === "Scissors"
          ? "You Win This Game"
          : "You Lose This Game";
      case "Paper":
        return computerSelection === "Rock"
          ? "You Win This Game"
          : "You Lose This Game";
      case "Scissors":
        return computerSelection === "Paper"
          ? "You Win This Game"
          : "You Lose This Game";
    }
  }
};
