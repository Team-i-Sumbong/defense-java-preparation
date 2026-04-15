const quizData = {
  easy: {
    title: "Easy Quiz",
    subtitle: "Short concept check for vocabulary and basic roles.",
    questions: [
      {
        topic: "Architecture",
        question: "What is the main purpose of separating a system into layers?",
        options: [
          "To make every class longer",
          "To give each part a clear responsibility",
          "To remove the need for models",
          "To avoid using methods"
        ],
        answer: 1,
        explanation: "Layering supports separation of concerns, so each part focuses on a specific responsibility."
      },
      {
        topic: "Startup",
        question: "In the i-Sumbong app, which class is the entry point of the program?",
        options: [
          "IssueReport",
          "AuthService",
          "App.java",
          "ReportRepository"
        ],
        answer: 2,
        explanation: "App.java launches the JavaFX application and prepares the first visible view."
      },
      {
        topic: "OOP Basics",
        question: "What is a class in object-oriented programming?",
        options: [
          "A blueprint for creating objects",
          "A saved JSON file",
          "A type of user interface",
          "A list of errors"
        ],
        answer: 0,
        explanation: "A class defines the data and behavior that its objects will have."
      },
      {
        topic: "Model Layer",
        question: "Which of the following is an example of a model class in i-Sumbong?",
        options: [
          "AuthPortalView",
          "ReportRepository",
          "IssueReport",
          "InputValidator"
        ],
        answer: 2,
        explanation: "IssueReport represents a real domain entity, so it belongs to the model layer."
      },
      {
        topic: "UI Layer",
        question: "Which layer is mainly responsible for gathering user input?",
        options: [
          "UI layer",
          "Repository layer",
          "Enum layer",
          "JSON layer"
        ],
        answer: 0,
        explanation: "The UI layer handles screen elements and user interaction."
      },
      {
        topic: "Repository",
        question: "Which layer should save and retrieve data from JSON files?",
        options: [
          "Repository layer",
          "UI layer",
          "Model layer",
          "Question layer"
        ],
        answer: 0,
        explanation: "Repositories are responsible for persistence and data access."
      },
      {
        topic: "Mindset",
        question: "What should students explain first in a defense answer?",
        options: [
          "The principle behind the design",
          "Their favorite color in the UI",
          "Every line of code in order",
          "Only the file name"
        ],
        answer: 0,
        explanation: "A strong defense answer starts with the principle, then uses code as supporting evidence."
      }
    ]
  },
  medium: {
    title: "Medium Quiz",
    subtitle: "Practice responsibilities, flow tracing, and better explanations.",
    questions: [
      {
        topic: "Architecture",
        question: "Why is separation of concerns useful in systems like i-Sumbong?",
        options: [
          "It makes every method return true",
          "It makes each layer easier to understand, maintain, and test",
          "It removes the need for program flow",
          "It forces all files into one package"
        ],
        answer: 1,
        explanation: "Separation of concerns improves clarity, maintainability, and testability."
      },
      {
        topic: "Flow",
        question: "Which sequence best matches the login flow in i-Sumbong?",
        options: [
          "Repository -> UI -> Service -> Model",
          "UI -> Service -> Repository -> Result shown in UI",
          "Model -> CSS -> Service -> UI",
          "JSON -> UI -> Model -> App.java"
        ],
        answer: 1,
        explanation: "The UI gathers input, the service evaluates rules, repositories provide data, and the UI shows the result."
      },
      {
        topic: "Repositories",
        question: "What would be a design problem if AuthPortalView handled JSON persistence directly?",
        options: [
          "The UI would mix interaction logic with storage responsibility",
          "The UI would become an enum",
          "The model would become a CSS file",
          "The app would stop using methods"
        ],
        answer: 0,
        explanation: "Mixing UI and persistence responsibilities weakens separation of concerns."
      },
      {
        topic: "Methods",
        question: "Which statement best explains registerResident(User user)?",
        options: [
          "It returns a UI screen",
          "It receives a user, validates it, assigns defaults, saves it, and reports success",
          "It only changes button colors",
          "It converts a repository into a model"
        ],
        answer: 1,
        explanation: "That method follows a clear business operation: validate, prepare, save, and return status."
      },
      {
        topic: "Critique",
        question: "Why is AuthPortalView a good class to mention in a design critique?",
        options: [
          "Because it shows how a UI class can grow large and may later need splitting",
          "Because it should store all JSON directly",
          "Because it removes the need for services",
          "Because it is not part of the app"
        ],
        answer: 0,
        explanation: "It is functional, but its size makes it a reasonable maintainability discussion point."
      },
      {
        topic: "Defense",
        question: "A panelist asks why repositories exist. Which answer is best?",
        options: [
          "Repositories exist so we can avoid methods",
          "Repositories isolate data access so storage logic is not mixed with UI or business rules",
          "Repositories are mostly for decoration",
          "Repositories are another name for models"
        ],
        answer: 1,
        explanation: "Repositories isolate persistence responsibility from other system concerns."
      },
      {
        topic: "Communication",
        question: "What makes a defense explanation stronger than simple memorization?",
        options: [
          "It gives the principle, the evidence in code, and the reason for the choice",
          "It repeats method names without explanation",
          "It avoids mentioning architecture",
          "It lists files with no interpretation"
        ],
        answer: 0,
        explanation: "Good explanations combine theory, code evidence, and practical reasoning."
      }
    ]
  },
  hard: {
    title: "Hard Quiz",
    subtitle: "Focus on critique, tradeoffs, and principle-first defense reasoning.",
    questions: [
      {
        topic: "Defense Reasoning",
        question: "Which answer best defends the decision to keep login validation in AuthService instead of AuthPortalView?",
        options: [
          "Because AuthService sounds more professional",
          "Because validation is business logic and should stay reusable and separate from UI interaction",
          "Because UI classes cannot call methods",
          "Because repositories only work with buttons"
        ],
        answer: 1,
        explanation: "The strongest answer uses separation of concerns and reusability as the reason."
      },
      {
        topic: "Critique",
        question: "What is the most balanced way to discuss AuthPortalView during defense?",
        options: [
          "It is perfect and has no maintainability tradeoffs",
          "It is unusable and should be deleted",
          "It currently works well for UI flow, but its size makes it a candidate for future refactoring",
          "It should replace all services"
        ],
        answer: 2,
        explanation: "A good critique is honest, balanced, and tied to maintainability rather than emotion."
      },
      {
        topic: "Architecture",
        question: "If persistence code were moved into model classes, what architectural drawback would likely increase?",
        options: [
          "Responsibilities would become less separated and models would carry unrelated storage concerns",
          "The UI would gain more encapsulation automatically",
          "Methods would stop returning values",
          "The system would stop needing objects"
        ],
        answer: 0,
        explanation: "Moving persistence into models mixes data representation with storage responsibility."
      },
      {
        topic: "Flow Analysis",
        question: "Which statement most accurately describes report submission in principle-first language?",
        options: [
          "The system transforms user input into a validated domain object, persists it, and returns feedback",
          "The system only changes UI colors and skips validation",
          "The repository creates the UI and asks the model to render buttons",
          "The process begins in JSON and ends in a constructor"
        ],
        answer: 0,
        explanation: "This answer describes the full flow at the correct architectural level."
      },
      {
        topic: "Encapsulation",
        question: "What makes encapsulation a defendable design choice rather than just a Java habit?",
        options: [
          "It provides controlled access to state, which supports consistency and future validation",
          "It hides all errors from developers",
          "It replaces repositories during runtime",
          "It guarantees every method is short"
        ],
        answer: 0,
        explanation: "Encapsulation is valuable because it supports control, consistency, and maintainability."
      },
      {
        topic: "Evidence",
        question: "What is the best way to use App.java as defense evidence?",
        options: [
          "Use it to show startup flow and view management, not to claim it handles all business logic",
          "Use it to prove repositories are unnecessary",
          "Use it to explain CSS styling rules",
          "Use it to avoid discussing architecture"
        ],
        answer: 0,
        explanation: "App.java is evidence for startup and navigation responsibilities."
      },
      {
        topic: "Professor Lens",
        question: "What separates a strong explanation from a memorized student answer?",
        options: [
          "The strong explanation identifies principles, evidence, tradeoffs, and rationale",
          "The memorized answer is always longer",
          "The strong explanation avoids naming classes completely",
          "There is no difference"
        ],
        answer: 0,
        explanation: "Strong explanations show reasoning, tradeoffs, and design understanding."
      }
    ]
  }
};

const difficultyButtons = document.querySelectorAll(".difficulty-button");
const questionList = document.getElementById("question-list");
const totalCount = document.getElementById("total-count");
const answeredCount = document.getElementById("answered-count");
const scoreCount = document.getElementById("score-count");
const quizTitle = document.getElementById("quiz-title");
const quizSubtitle = document.getElementById("quiz-subtitle");
const progressBarFill = document.getElementById("progress-bar-fill");
const submitQuizButton = document.getElementById("submit-quiz");
const resetQuizButton = document.getElementById("reset-quiz");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultCopy = document.getElementById("result-copy");
const jumpToQuizButton = document.getElementById("jump-to-quiz");

let activeDifficulty = "easy";
let selectedAnswers = {};
let submitted = false;

function getActiveQuiz() {
  return quizData[activeDifficulty];
}

function updateSummary() {
  const quiz = getActiveQuiz();
  const total = quiz.questions.length;
  const answered = Object.keys(selectedAnswers).length;
  const score = submitted ? calculateScore() : 0;

  if (totalCount) {
    totalCount.textContent = String(total);
  }

  answeredCount.textContent = String(answered);
  scoreCount.textContent = String(score);
  quizTitle.textContent = quiz.title;
  quizSubtitle.textContent = quiz.subtitle;
  progressBarFill.style.width = `${(answered / total) * 100}%`;
}

function calculateScore() {
  const quiz = getActiveQuiz();
  return quiz.questions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);
}

function getResultMessage(score, total) {
  const ratio = score / total;

  if (ratio === 1) {
    return "Excellent work. You answered every question correctly and showed strong command of the defense ideas in this set.";
  }

  if (ratio >= 0.71) {
    return "Strong result. Review the missed explanations once, then move to the next difficulty.";
  }

  if (ratio >= 0.43) {
    return "Solid progress. Focus on the missed questions, especially the ones about responsibility and reasoning.";
  }

  return "Keep practicing. Revisit the course page and Java review, then try this short set again.";
}

function renderResult() {
  const quiz = getActiveQuiz();
  const total = quiz.questions.length;
  const score = calculateScore();

  resultTitle.textContent = `${quiz.title} completed`;
  resultScore.textContent = `${score} / ${total}`;
  resultCopy.textContent = getResultMessage(score, total);
  scoreCount.textContent = String(score);
}

function createOptionButton(questionIndex, optionIndex, optionText) {
  const button = document.createElement("button");
  button.className = "option-button";
  button.type = "button";
  button.textContent = optionText;

  if (selectedAnswers[questionIndex] === optionIndex) {
    button.classList.add("is-selected");
  }

  if (submitted) {
    const correctIndex = getActiveQuiz().questions[questionIndex].answer;

    if (optionIndex === correctIndex) {
      button.classList.add("is-correct");
    }

    if (selectedAnswers[questionIndex] === optionIndex && optionIndex !== correctIndex) {
      button.classList.add("is-wrong");
    }
  }

  button.addEventListener("click", () => {
    if (submitted) {
      return;
    }

    selectedAnswers[questionIndex] = optionIndex;
    renderQuiz();
  });

  return button;
}

function createQuestionCard(question, index) {
  const card = document.createElement("article");
  card.className = "question-card";

  if (submitted) {
    const isCorrect = selectedAnswers[index] === question.answer;
    card.classList.add(isCorrect ? "is-correct" : "is-wrong");
  }

  const meta = document.createElement("div");
  meta.className = "question-meta";

  const number = document.createElement("p");
  number.className = "question-number";
  number.textContent = `Question ${index + 1}`;

  const topic = document.createElement("p");
  topic.className = "question-topic";
  topic.textContent = question.topic;

  meta.append(number, topic);

  const text = document.createElement("h3");
  text.className = "question-text";
  text.textContent = question.question;

  const options = document.createElement("div");
  options.className = "option-list";

  question.options.forEach((optionText, optionIndex) => {
    options.appendChild(createOptionButton(index, optionIndex, optionText));
  });

  const feedback = document.createElement("div");
  feedback.className = "feedback-text";

  if (submitted) {
    const isCorrect = selectedAnswers[index] === question.answer;
    feedback.classList.add("is-visible", isCorrect ? "is-correct" : "is-wrong");
    feedback.textContent = isCorrect
      ? `Correct. ${question.explanation}`
      : `Correct answer: ${question.options[question.answer]}. ${question.explanation}`;
  }

  card.append(meta, text, options, feedback);
  return card;
}

function renderQuiz() {
  const quiz = getActiveQuiz();
  questionList.innerHTML = "";

  quiz.questions.forEach((question, index) => {
    questionList.appendChild(createQuestionCard(question, index));
  });

  difficultyButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.difficulty === activeDifficulty);
  });

  updateSummary();

  if (!submitted) {
    resultTitle.textContent = "Finish the quiz to see your evaluation.";
    resultScore.textContent = `0 / ${quiz.questions.length}`;
    resultCopy.textContent = "This panel will summarize your performance and tell you what to review next.";
  }
}

function resetQuiz() {
  selectedAnswers = {};
  submitted = false;
  renderQuiz();
}

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextDifficulty = button.dataset.difficulty;
    if (!nextDifficulty || nextDifficulty === activeDifficulty) {
      return;
    }

    activeDifficulty = nextDifficulty;
    resetQuiz();
  });
});

submitQuizButton?.addEventListener("click", () => {
  submitted = true;
  renderQuiz();
  renderResult();
  document.getElementById("result-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

resetQuizButton?.addEventListener("click", () => {
  resetQuiz();
  questionList.scrollIntoView({ behavior: "smooth", block: "start" });
});

jumpToQuizButton?.addEventListener("click", () => {
  document.getElementById("quiz-root")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderQuiz();
