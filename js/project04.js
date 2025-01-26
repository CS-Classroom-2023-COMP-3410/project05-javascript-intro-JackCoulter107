const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C#"],
      correct: 2,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const userAnswers = [];
  
  // DOM Elements
  const quizContainer = document.getElementById("quiz");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const submitButton = document.getElementById("submit");
  
  // Render Question
  function renderQuestion(index) {
    const questionData = quizData[index];
    quizContainer.innerHTML = `
      <h2>Question ${index + 1}/${quizData.length}</h2>
      <div class="question">${questionData.question}</div>
      <ul class="options">
        ${questionData.options
          .map(
            (option, i) => `
          <li>
            <label>
              <input type="radio" name="option" value="${i}" ${
                userAnswers[index] === i ? "checked" : ""
              }>
              ${option}
            </label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
  
  // Handle Navigation
  function handleNavigation() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.style.display =
      currentQuestionIndex < quizData.length - 1 ? "inline-block" : "none";
    submitButton.style.display =
      currentQuestionIndex === quizData.length - 1 ? "inline-block" : "none";
  }
  
  // Save Answer
  function saveAnswer() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );
    if (selectedOption) {
      userAnswers[currentQuestionIndex] = parseInt(selectedOption.value, 10);
    }
  }
  
  // Show Results
  function showResults() {
    const resultHTML = quizData
      .map((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        return `
          <div class="results">
            <p>Q${i + 1}: ${q.question}</p>
            <p>Your Answer: ${
              q.options[userAnswers[i]] || "No Answer"
            } - <span class="${isCorrect ? "correct" : "incorrect"}">${
          isCorrect ? "Correct" : `Incorrect (Correct: ${q.options[q.correct]})`
        }</span></p>
          </div>
        `;
      })
      .join("");
  
    quizContainer.innerHTML = `
      <h2>Quiz Results</h2>
      <p>Your score: ${score}/${quizData.length}</p>
      ${resultHTML}
    `;
  }
  
  // Event Listeners
  prevButton.addEventListener("click", () => {
    saveAnswer();
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    handleNavigation();
  });
  
  nextButton.addEventListener("click", () => {
    saveAnswer();
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    handleNavigation();
  });
  
  submitButton.addEventListener("click", () => {
    saveAnswer();
    score = userAnswers.reduce(
      (acc, answer, i) => (answer === quizData[i].correct ? acc + 1 : acc),
      0
    );
    showResults();
  });
  
  // Initialize
  renderQuestion(currentQuestionIndex);
  handleNavigation();
  