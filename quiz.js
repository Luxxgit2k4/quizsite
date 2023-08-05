const questions = [
  { question: "What is the capital city of France?", answer: "PARIS" },
  { question: "How many continents are there in the world?", answer: "7", answer: "SEVEN" },
  { question: "What is the result of 5 + 7?", answer: "12", answer: "TWELVE" },
  { question: "What is the pigment present in green leaves?", answer: "CHLOROPHYLL" },
  { question: "What is the largest mammal on Earth?", answer: "BLUEWHALE" , answer: "BLUE WHALE" }
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion(questionNumber) {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
      <form onsubmit="return false;">
          <div class="question" id="question${questionNumber}">
              <label for="answer${questionNumber}">${questions[questionNumber - 1].question}</label>
              <input type="text" id="answer${questionNumber}" onkeypress="handleKeyPress(event, ${questionNumber})" />
              <button type="button" onclick="checkAnswer(${questionNumber})">Submit</button>
          </div>
      </form>
  `;
}

function handleKeyPress(event, questionNumber) {
  if (event.key === "Enter") {
      checkAnswer(questionNumber);
  }
}

function checkAnswer(questionNumber) {
  const answerInput = document.getElementById(`answer${questionNumber}`);
  const userAnswer = answerInput.value.trim(); 

  const correctAnswer = questions[questionNumber - 1].answer; 

  if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
      console.log("Correct!");
      correctAnswers++;
  } else {
      console.log("Wrong!");
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
      showQuestion(currentQuestion + 1);
  } else {
      showResults();
  }
}
function showResults() {
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  const heading = document.getElementById("heading");

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `YOU GOT ${correctAnswers} QUESTIONS CORRECT<br> <br> <br> YOUR SCORE IS ${percentage}%`;
   resultDiv.style.opacity = "1";
  resultDiv.style.transform = "translateY(0)";

  resultDiv.style.display = "block";
const questionContainer = document.getElementById(`question${currentQuestion}`);
  questionContainer.remove();
  heading.remove();
}
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-toggle");
  darkModeButton.addEventListener("click", toggleDarkMode);

  showQuestion(1);
});
