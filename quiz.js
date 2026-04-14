const quizData = {
  easy: {
    title: "Easy Quiz",
    code: "E",
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
        topic: "OOP Basics",
        question: "What is an object?",
        options: [
          "A file path",
          "An actual instance created from a class",
          "A method return type only",
          "A repository rule"
        ],
        answer: 1,
        explanation: "An object is a real instance created from a class blueprint."
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
        topic: "Service Layer",
        question: "What is the main role of the service layer?",
        options: [
          "Drawing the buttons",
          "Applying business rules",
          "Storing CSS values",
          "Replacing all models"
        ],
        answer: 1,
        explanation: "The service layer applies rules and decision-making logic."
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
        topic: "Methods",
        question: "When reading a method, what should you check first?",
        options: [
          "The file color",
          "The method name and purpose",
          "The monitor size",
          "The browser tab"
        ],
        answer: 1,
        explanation: "The method name is one of the fastest clues about its responsibility."
      },
      {
        topic: "Encapsulation",
        question: "Why are getters and setters commonly used?",
        options: [
          "To make classes impossible to read",
          "To avoid creating objects",
          "To control access to object data",
          "To replace constructors"
        ],
        answer: 2,
        explanation: "Getters and setters support encapsulation by controlling how data is accessed and changed."
      },
      {
        topic: "Flow",
        question: "In simple terms, what happens after the UI sends login data to AuthService?",
        options: [
          "The app deletes the model",
          "The service checks business rules and account data",
          "The CSS file changes the password",
          "The repository becomes the UI"
        ],
        answer: 1,
        explanation: "AuthService validates the input and checks stored account information before deciding the result."
      },
      {
        topic: "Defense",
        question: "Which answer is stronger during defense?",
        options: [
          "Because the code is written that way",
          "Because we wanted more files only",
          "Because each layer has a focused responsibility",
          "Because Java requires it every time"
        ],
        answer: 2,
        explanation: "Strong defense answers explain the principle and the reason behind the design."
      },
      {
        topic: "Evidence",
        question: "What does AuthPortalView mainly demonstrate?",
        options: [
          "UI interaction",
          "JSON storage",
          "Enum declaration",
          "Database indexing"
        ],
        answer: 0,
        explanation: "AuthPortalView is part of the interface layer and handles user interaction."
      },
      {
        topic: "Responsibility",
        question: "Which choice best describes ReportRepository?",
        options: [
          "A class for persistence responsibility",
          "A design for drawing dashboards",
          "A class for storing CSS styles",
          "A replacement for all services"
        ],
        answer: 0,
        explanation: "ReportRepository focuses on saving and retrieving report data."
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
    code: "M",
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
        topic: "Models",
        question: "Why is IssueReport considered a strong model example?",
        options: [
          "Because it stores screen color values",
          "Because it represents a real report entity with structured data",
          "Because it contains all UI interactions",
          "Because it replaces the repository"
        ],
        answer: 1,
        explanation: "IssueReport models a real thing in the problem domain: a submitted report."
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
        question: "Which statement best explains `registerResident(User user)`?",
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
        topic: "Encapsulation",
        question: "What future benefit does encapsulation provide besides organization?",
        options: [
          "It allows validation logic to be added in controlled access points later",
          "It removes the need for object creation",
          "It forces all fields to be public",
          "It replaces constructors with enums"
        ],
        answer: 0,
        explanation: "Encapsulation makes future validation and control easier because access happens through methods."
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
        topic: "Responsibility",
        question: "Which layer should decide whether a resident login is allowed?",
        options: [
          "Service layer",
          "CSS layer",
          "Logo image layer",
          "Table layout layer"
        ],
        answer: 0,
        explanation: "Login permission is a business-rule decision, so it belongs in the service layer."
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
        topic: "Abstraction",
        question: "What does abstraction help students do during defense?",
        options: [
          "Hide every answer completely",
          "Describe the important role of a component without drowning in low-level detail",
          "Ignore the system design",
          "Skip explaining classes"
        ],
        answer: 1,
        explanation: "Abstraction helps explain the purpose of a component at the right level."
      },
      {
        topic: "Program Start",
        question: "Why is App.java important beyond just being the first file that runs?",
        options: [
          "It demonstrates startup flow and view switching responsibilities",
          "It stores all reports permanently",
          "It replaces the repository layer",
          "It is the same as IssueReport"
        ],
        answer: 0,
        explanation: "App.java shows how the application launches and manages the initial navigation flow."
      },
      {
        topic: "Traceability",
        question: "If a student needs to explain report submission, what should they trace?",
        options: [
          "Only the color palette",
          "Input, service validation, repository save, and resulting feedback",
          "Only the logo file",
          "Only the constructor names"
        ],
        answer: 1,
        explanation: "A strong flow explanation follows input, processing, persistence, and output."
      },
      {
        topic: "Comparisons",
        question: "How is a service class different from a model class?",
        options: [
          "A service applies rules; a model represents structured data",
          "A service draws buttons; a model writes CSS",
          "A service is always smaller; a model is always larger",
          "There is no difference"
        ],
        answer: 0,
        explanation: "Services perform operations and decision-making, while models represent entities and their data."
      },
      {
        topic: "Review",
        question: "Which question reflects critical code reading?",
        options: [
          "Does this class do too many unrelated things?",
          "Does this file name look lucky?",
          "Is the code using enough blank lines only?",
          "Can we avoid principles during defense?"
        ],
        answer: 0,
        explanation: "Critical reading looks at responsibility, clarity, maintainability, and design quality."
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
    code: "H",
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
        topic: "Abstraction",
        question: "Which explanation best uses abstraction to describe IssueReport?",
        options: [
          "It is a class with many fields, braces, and semicolons",
          "It is a structured representation of a resident-submitted concern used across the system",
          "It is only a place to store getter names",
          "It is the same as the repository"
        ],
        answer: 1,
        explanation: "Abstraction focuses on the meaningful role of the class rather than low-level syntax."
      },
      {
        topic: "Tradeoffs",
        question: "Why is 'each layer has one main job' not just a textbook phrase in this project?",
        options: [
          "Because the actual classes demonstrate different responsibilities that can be traced in login and report flow",
          "Because all files are equal no matter what they do",
          "Because JavaFX prevents layered design",
          "Because file count alone proves quality"
        ],
        answer: 0,
        explanation: "The principle is visible in the app's real flow and class roles."
      },
      {
        topic: "Defense Quality",
        question: "Which of the following is the strongest defense response to 'Why did you use repositories?'",
        options: [
          "Repositories are there because many Java projects have them",
          "Repositories isolate data access, so UI and service classes stay focused on interaction and rules rather than storage details",
          "Repositories exist mainly to increase the number of folders",
          "Repositories are another word for methods"
        ],
        answer: 1,
        explanation: "A strong answer explains the principle and the benefit to the system."
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
        topic: "Maintainability",
        question: "What is the best reason to avoid putting business rules directly in the UI?",
        options: [
          "It makes the font style harder to edit",
          "It causes responsibility overlap, making the code harder to maintain and reuse",
          "It removes all constructors automatically",
          "It prevents models from existing"
        ],
        answer: 1,
        explanation: "Mixing UI and business logic makes the system harder to change and reason about."
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
        topic: "Evaluation",
        question: "If a panelist asks for a weakness in the current architecture, which answer is most mature?",
        options: [
          "There are no weaknesses at all",
          "The UI flow is working, but some UI classes are large enough that future modularization would improve maintainability",
          "Everything should be rewritten immediately",
          "Java is the only weakness"
        ],
        answer: 1,
        explanation: "A mature answer acknowledges a realistic improvement area without dismissing the existing work."
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
        topic: "Precision",
        question: "Which phrase is more academically precise?",
        options: [
          "AuthService is there because it feels organized",
          "AuthService centralizes account-related business rules such as validation, verification, and access checks",
          "AuthService is basically random but useful",
          "AuthService is only for making the code longer"
        ],
        answer: 1,
        explanation: "This wording is precise, principle-based, and tied to actual responsibility."
      },
      {
        topic: "Analysis",
        question: "Why is ReportRepository easier to explain during defense than a mixed-responsibility class would be?",
        options: [
          "Because its purpose is narrow and focused on persistence",
          "Because it contains every concern in one place",
          "Because it avoids methods",
          "Because it removes the need for models"
        ],
        answer: 0,
        explanation: "Focused classes are easier to explain because their responsibility is clear."
      },
      {
        topic: "Defense Strategy",
        question: "When answering 'How does the login flow move through the system?', what makes the best structure?",
        options: [
          "List filenames only",
          "Start with the principle of layered flow, then trace UI input, service validation, repository lookup, and resulting output",
          "Explain only the final dashboard screen",
          "Skip the service layer"
        ],
        answer: 1,
        explanation: "The best answer combines architecture with a traceable system flow."
      },
      {
        topic: "Professor Lens",
        question: "What separates a senior-level explanation from a student-level memorized answer?",
        options: [
          "The senior-level explanation identifies principles, evidence, tradeoffs, and rationale",
          "The student-level answer is always longer",
          "The senior-level answer avoids naming classes completely",
          "There is no difference"
        ],
        answer: 0,
        explanation: "Senior-level explanations show reasoning, tradeoffs, and design understanding."
      }
    ]
  }
};

const difficultyButtons = document.querySelectorAll(".difficulty-button");
const questionList = document.getElementById("question-list");
const answeredCount = document.getElementById("answered-count");
const scoreCount = document.getElementById("score-count");
const quizTitle = document.getElementById("quiz-title");
const difficultyCode = document.getElementById("difficulty-code");
const difficultyLabel = document.getElementById("difficulty-label");
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

  answeredCount.textContent = String(answered);
  scoreCount.textContent = String(score);
  quizTitle.textContent = quiz.title;
  difficultyCode.textContent = quiz.code;
  difficultyLabel.textContent = activeDifficulty.charAt(0).toUpperCase() + activeDifficulty.slice(1);
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
    return "Excellent work. You answered every question correctly and showed strong command of the principles behind the system.";
  }

  if (ratio >= 0.8) {
    return "Strong result. You are explaining the architecture well and are close to defense-ready at this difficulty.";
  }

  if (ratio >= 0.6) {
    return "Solid progress. Review the feedback, especially the questions that test reasoning and responsibility boundaries.";
  }

  return "Keep practicing. Focus on principles like separation of concerns, model responsibility, and flow tracing before moving up.";
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
    resultScore.textContent = "0 / 15";
    resultCopy.textContent = "This panel will summarize your performance and tell you whether you are ready to move up in difficulty.";
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
