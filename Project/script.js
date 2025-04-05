const choices = ["stone", "paper", "scissors"];
let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "stone" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "stone")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const outcome = getResult(playerChoice, computerChoice);

  const resultDiv = document.getElementById("result");
  if (outcome === "win") {
    wins++;
    resultDiv.innerHTML = `You chose <b>${playerChoice}</b>, computer chose <b>${computerChoice}</b>.<br><span style="color:green;">You win! 🎉</span>`;
  } else if (outcome === "lose") {
    losses++;
    resultDiv.innerHTML = `You chose <b>${playerChoice}</b>, computer chose <b>${computerChoice}</b>.<br><span style="color:red;">You lose! 😞</span>`;
  } else {
    draws++;
    resultDiv.innerHTML = `You chose <b>${playerChoice}</b>, computer chose <b>${computerChoice}</b>.<br><span style="color:gray;">It's a draw! 🤝</span>`;
  }

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("draws").textContent = draws;
}
