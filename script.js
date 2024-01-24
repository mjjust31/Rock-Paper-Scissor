let wins = 0;
let loss = 0;
let ties = 0;
const compChoices = ["r", "p", "s"];
let userPick = "";
let compPick = "";

const playGame = () => {
  let userPick = prompt(
    "Please enter 'R' for Rock, 'P' for Paper, 'S' for scissor"
  );
  console.log(userPick);
  let compPick = getComputerPick();
  console.log(compPick);

  if (compPick === userPick) {
    alert("it's a tie!");
    ties++;
  } else if (
    (compPick === "r" && userPick === "s") ||
    (compPick === "p" && userPick === "r") ||
    (compPick === "s" && userPick === "p")
  ) {
    alert("You lost!");
    loss++;
  } else {
    alert("You win!");
    wins++;
  }
};

const getComputerPick = () => {
  let random = Math.floor(Math.random() * compChoices.length);
  let compPick = compChoices[random];

  return compPick;
};

playGame();
