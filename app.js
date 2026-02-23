let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

// Generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again!";
  msg.style.backgroundColor = "black";
};

// Show winner
const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You Lose! Computer ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Play game
const playGame = (userchoice) => {
  const compChoice = genCompChoice();

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin;

    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userchoice, compChoice);
  }
};

// Click event
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});