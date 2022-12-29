const scorePlayer1 = document.getElementById("score-player1");
const scorePlayer2 = document.getElementById("score-player2");
const currentScorePlayer1 = document.getElementById("current-score-0");
const currentScorePlayer2 = document.getElementById("current-score-1");
const buttonDice = document.getElementById("btnDice");
const buttonNewGame = document.querySelector(".restart");
const elementDice = document.querySelector(".dice-photo");
const elementPlayer1 = document.querySelector(".container-player1");
const elementPlayer2 = document.querySelector(".container-player2");
const elementCurrentScore1 = document.querySelector(".current-score1");
const elementCurrentScore2 = document.querySelector(".current-score2");

let currentscore1, currentscore2, dice1, dice2;

const resetGame = function () {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  currentscore1 = 0;
  currentscore2 = 0;
  dice1 = 0;
  dice2 = 0;
  elementCurrentScore1.classList.remove("active-player");
  elementCurrentScore2.classList.remove("active-player");
};

resetGame();
// activePlayer este setat la pozitia 1 deoarece conditia de mai jos sa fie falsa
let activePlayer = 1;
let playing = true;

buttonDice.addEventListener("click", () => {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    elementDice.src = `dice-photo/dice-${dice}.png`;
    activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 0) {
      dice1 = dice;
      console.log(`dice1: ${dice1}`);
      currentScorePlayer1.textContent = dice1;
      elementCurrentScore1.classList.add("active-player");
      elementCurrentScore2.classList.remove("active-player");
    } else if (activePlayer === 1) {
      dice2 = dice;
      console.log(`dice2: ${dice2}`);
      currentScorePlayer2.textContent = dice2;
      elementCurrentScore1.classList.remove("active-player");
      elementCurrentScore2.classList.add("active-player");
    }

    if (dice2 != 0 && dice1 > dice2) {
      scorePlayer1.textContent = dice1;
      currentscore1 += dice1;
      scorePlayer1.textContent = currentscore1;
      dice2 = 0;
      console.log(`currentscore1 ${currentscore1}`);
      // currentscore1 = 0;
    } else if (dice1 < dice2) {
      scorePlayer2.textContent = dice2;
      currentscore2 += dice2;
      scorePlayer2.textContent = currentscore2;
      dice2 = 0;
      console.log(`currentscore2 ${currentscore2}`);
    } else if (dice1 === dice2) {
      resetGame();
    }
  }

  if (currentscore1 >= 20) {
    playing = false;
    elementPlayer1.classList.add("winner-player");
    currentScorePlayer1.textContent = "Winner!";
  } else if (currentscore2 >= 20) {
    playing = false;
    elementPlayer2.classList.add("winner-player");
    currentScorePlayer2.textContent = "Winner!";
  }
});

buttonNewGame.addEventListener("click", () => {
  resetGame();
  elementPlayer1.classList.remove("winner-player");
  elementPlayer2.classList.remove("winner-player");
  playing = true;
});
