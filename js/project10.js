const textToTypeEl = document.getElementById("text-to-type");
const userInputEl = document.getElementById("user-input");
const difficultyEl = document.getElementById("difficulty");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

let timer = null;
let timeElapsed = 0;
let generatedText = "";
let totalTypedCharacters = 0;
let totalMistakes = 0;

const difficultyTexts = {
  easy: [
    "The quick brown fox jumps over the lazy dog.",
    "Typing is fun and improves your skills.",
    "Practice makes perfect for everyone.",
  ],
  medium: [
    "Yesterday I saw a rainbow that brightened my day.",
    "Learning to type faster can save a lot of time.",
    "The mountains are beautiful in the early morning.",
  ],
  hard: [
    "Advanced typing tests your ability to be accurate and fast.",
    "Programming languages like JavaScript require typing practice.",
    "Remember to use proper posture and hand placement while typing.",
  ],
};

// Get a random text based on difficulty
function getRandomText(difficulty) {
  const texts = difficultyTexts[difficulty];
  return texts[Math.floor(Math.random() * texts.length)];
}

// Update the visual highlighting of text
function updateTextHighlight() {
  const userText = userInputEl.value;
  const textHTML = generatedText.split("").map((char, index) => {
    if (index < userText.length) {
      return `<span class="${char === userText[index] ? "correct" : "incorrect"}">${char}</span>`;
    }
    return `<span>${char}</span>`;
  });
  textToTypeEl.innerHTML = textHTML.join("");
}

// Calculate WPM and Accuracy
function calculateStats() {
  const wordsTyped = userInputEl.value.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / timeElapsed) * 60) || 0;
  const accuracy = Math.max(0, Math.round(((totalTypedCharacters - totalMistakes) / totalTypedCharacters) * 100));
  wpmEl.textContent = wpm;
  accuracyEl.textContent = accuracy;
}

// Handle typing input
userInputEl.addEventListener("input", () => {
  const userText = userInputEl.value;
  totalTypedCharacters++;
  if (generatedText.startsWith(userText)) {
    totalMistakes += userText.split("").reduce((mistakes, char, i) => (char !== generatedText[i] ? mistakes + 1 : mistakes), 0);
    updateTextHighlight();
  } else {
    totalMistakes++;
    updateTextHighlight();
  }

  if (userText === generatedText) {
    clearInterval(timer);
    userInputEl.disabled = true;
    calculateStats();
  }
});

// Start timer
function startTimer() {
  timer = setInterval(() => {
    timeElapsed++;
    timeEl.textContent = timeElapsed;
    calculateStats();
  }, 1000);
}

// Start the training
startButton.addEventListener("click", () => {
  generatedText = getRandomText(difficultyEl.value);
  textToTypeEl.textContent = generatedText;
  userInputEl.value = "";
  userInputEl.disabled = false;
  userInputEl.focus();

  totalTypedCharacters = 0;
  totalMistakes = 0;
  timeElapsed = 0;
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100";

  restartButton.style.display = "block";
  startButton.disabled = true;

  updateTextHighlight();
  startTimer();
});

// Restart training
restartButton.addEventListener("click", () => {
  clearInterval(timer);
  startButton.disabled = false;
  userInputEl.disabled = true;
  textToTypeEl.textContent = "";
  userInputEl.value = "";
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100";
  restartButton.style.display = "none";
});
