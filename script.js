const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  // Add more questions here...
];

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options
              .map(
                (option) => `
                <li>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </li>
            `
              )
              .join("")}
        </ul>
    `;
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  const userAnswer = selectedOption.value;
  if (userAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  nextButton.style.display = "none";
  resultContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>`;
}

// Display the first question on page load
displayQuestion();
