const symbols = ["🍎", "🍊", "🍇", "🍌", "🍒", "🍉", "🥝", "🍓"];
let cards = [...symbols, ...symbols];
let firstCard, secondCard;
let flippedCount = 0;
let moves = 0;
let timer;
let secondsElapsed = 0;

// DOM Elements
const gameBoard = document.getElementById("game-board");
const movesCounter = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const restartButton = document.getElementById("restart");

// Shuffle cards
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Initialize the game
function initGame() {
  cards = shuffle(cards);
  gameBoard.innerHTML = "";
  cards.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerHTML = `<span>${symbol}</span>`;
    card.querySelector("span").style.visibility = "hidden";
    card.addEventListener("click", handleCardClick);
    gameBoard.appendChild(card);
  });

  resetStats();
}

// Handle card click
function handleCardClick() {
  if (this.classList.contains("flipped") || this.classList.contains("matched") || secondCard) return;

  this.classList.add("flipped");
  this.querySelector("span").style.visibility = "visible";

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    moves++;
    movesCounter.textContent = moves;

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      firstCard = null;
      secondCard = null;
      flippedCount += 2;

      if (flippedCount === cards.length) {
        clearInterval(timer);
        alert(`You won in ${moves} moves and ${formatTime(secondsElapsed)}!`);
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.querySelector("span").style.visibility = "hidden";
        secondCard.querySelector("span").style.visibility = "hidden";
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
}

// Reset stats
function resetStats() {
  moves = 0;
  flippedCount = 0;
  secondsElapsed = 0;
  movesCounter.textContent = moves;
  timerDisplay.textContent = "0:00";
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

// Timer logic
function updateTimer() {
  secondsElapsed++;
  timerDisplay.textContent = formatTime(secondsElapsed);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// Restart button logic
restartButton.addEventListener("click", initGame);

// Initialize the game on load
initGame();
