let wins = 0;
let loss = 0;
let ties = 0;
const computerPick = ["r", "p", "s"];
let userPick = "";

const playGame = () => {
  let userPick = prompt(
    "Please enter 'R' for Rock, 'P' for Paper, 'S' for scissor"
  );

  if (computerPick === userPick) {
    alert("it's a tie!");
    ties++;
  } else if (computerPick === 'r' && userPick ==='s' || computerPick==='p' && userPick ==='s' || computerPick === 's' && userPick==='p')
};

const getComputerPick = () => {
  let random = Math.floor(Math.random() * computerPick.length);
  let compPick = computerPick[random];

  return compPick;
};

playGame();
