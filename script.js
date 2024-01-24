let wins = 0;
let loss = 0;
let ties = 0;
const compChoices = ["r", "p", "s"];
compPick = "";

const playGame = () => {
  let userPick = prompt(
    "Please enter 'R' for Rock, 'P' for Paper, 'S' for scissor"
  )
    .toLowerCase()
    .trim();
  console.log(userPick);

  compPick = getComputerPick();
  console.log(compPick);

  while (userPick !== "r" && userPick !== "s" && userPick !== "p") {
    alert("Please choose a valid letter");
    userPick = prompt(
      "Please enter 'R' for Rock, 'P' for Paper, 'S' for scissor"
    );
  }

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

  playAgain();
};

const getComputerPick = () => {
  let random = Math.floor(Math.random() * compChoices.length);
  let compPick = compChoices[random];

  return compPick;
};

const playAgain = () => {};

playGame();
