const progressChecks = document.querySelectorAll(".progress-check");
const progressValue = document.getElementById("progress-value");
const startReviewButton = document.getElementById("start-review");
const flashcards = document.querySelectorAll("[data-flashcard]");
const flowSteps = document.querySelectorAll(".flow-step");
const flowToggles = document.querySelectorAll(".flow-toggle");
const flowOutput = document.getElementById("flow-output");
const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quiz-feedback");
const promptButtons = document.querySelectorAll(".prompt-button:not(.scenario-button)");
const promptAnswer = document.getElementById("prompt-answer");
const scenarioButtons = document.querySelectorAll(".scenario-button");
const scenarioQuestion = document.getElementById("scenario-question");
const scenarioAnswer = document.getElementById("scenario-answer");

const flowTracks = {
  login: [
    {
      button: "1. User opens app",
      title: "1. User opens app",
      body: "The system begins in App.java, creates the main stage, and prepares the first visible screen."
    },
    {
      button: "2. UI collects input",
      title: "2. UI collects input",
      body: "AuthPortalView gathers the email, password, and account type from JavaFX controls."
    },
    {
      button: "3. Service applies rules",
      title: "3. Service applies rules",
      body: "AuthService checks passwords, verification status, account type, and activation state."
    },
    {
      button: "4. Repository accesses data",
      title: "4. Repository accesses data",
      body: "UserRepository or AdminRepository reads the stored user records used by the service for decision-making."
    },
    {
      button: "5. System decides result",
      title: "5. System decides result",
      body: "The system determines whether login succeeds or fails based on business rules and stored account data."
    },
    {
      button: "6. UI shows outcome",
      title: "6. UI shows outcome",
      body: "The app either opens the correct dashboard or displays a feedback message to the user."
    }
  ],
  report: [
    {
      button: "1. User opens report form",
      title: "1. User opens report form",
      body: "A resident reaches the report screen through the application interface after logging in."
    },
    {
      button: "2. UI collects details",
      title: "2. UI collects details",
      body: "The view gathers title, description, location, category, and optional image information."
    },
    {
      button: "3. Service validates data",
      title: "3. Service validates data",
      body: "ReportService checks required fields, assigns IDs, adds timestamps, and sets the default status."
    },
    {
      button: "4. Repository saves record",
      title: "4. Repository saves record",
      body: "ReportRepository writes the report into shared JSON storage, while StatusLogRepository records status history."
    },
    {
      button: "5. System creates result",
      title: "5. System creates result",
      body: "The application stores the report successfully and prepares the confirmation or updated dashboard state."
    },
    {
      button: "6. UI shows outcome",
      title: "6. UI shows outcome",
      body: "The user sees a success message or refreshed report list, confirming the submission result."
    }
  ]
};

const promptAnswers = {
  "Why did you separate UI and service classes?":
    "We separated them to follow separation of concerns. The UI handles interaction, while the service layer handles business rules, which makes the system easier to maintain, test, and explain.",
  "What is the purpose of getters and setters in your model?":
    "They support encapsulation by giving controlled access to object data. This keeps the model organized and makes future validation or logic easier to add.",
  "How does the login flow move through the system?":
    "The login flow begins in the UI, where AuthPortalView collects user input. It then calls AuthService, which checks the rules and repository data, and the UI shows either an error or the correct dashboard.",
  "Why use repositories instead of putting all logic in the UI?":
    "Repositories are responsible for persistence, not interaction. Keeping storage code out of the UI avoids mixing concerns and keeps each layer focused on one responsibility.",
  "What design principle does IssueReport demonstrate?":
    "IssueReport demonstrates modeling and abstraction. It represents a real domain entity, a submitted concern, in a structured object that other layers can use consistently."
};

const scenarioResponses = {
  "Why not put login validation in the UI?": {
    question: "A panelist asks: why not put login validation directly inside the JavaFX view?",
    answer:
      "Because the UI should handle interaction, not business policy. If login rules stay in AuthService, they can be reused, tested, and changed without rewriting screen logic."
  },
  "Why is ReportRepository not part of the model?": {
    question: "A panelist asks: why is ReportRepository not considered part of the model layer?",
    answer:
      "Because ReportRepository does not represent a real entity. Its responsibility is persistence, meaning it manages how report data is saved and retrieved, while the model represents the report itself."
  },
  "Why is AuthPortalView a maintainability discussion point?": {
    question: "A panelist asks: why is AuthPortalView a good maintainability discussion point?",
    answer:
      "Because it handles many UI states and workflows in one class. It works, but its size shows how UI classes can become harder to maintain over time and may later benefit from being split into smaller focused views."
  }
};

let activeTrack = "login";

function updateProgress() {
  const total = progressChecks.length;
  const completed = Array.from(progressChecks).filter((check) => check.checked).length;
  const percent = Math.round((completed / total) * 100);
  progressValue.textContent = `${percent}%`;

  const ring = document.querySelector(".score-ring");
  if (ring) {
    ring.style.background = `radial-gradient(circle closest-side, rgba(11, 25, 40, 0.96) 68%, transparent 69%), conic-gradient(#ffb347 ${percent * 3.6}deg, rgba(255, 255, 255, 0.16) 0deg)`;
  }
}

function renderFlow(trackName) {
  const items = flowTracks[trackName];
  if (!items || !flowSteps.length || !flowOutput) {
    return;
  }

  flowSteps.forEach((step, index) => {
    step.textContent = items[index].button;
    step.dataset.flow = String(index);
    step.classList.toggle("is-active", index === 0);
  });

  flowOutput.innerHTML = `
    <h3>${items[0].title}</h3>
    <p>${items[0].body}</p>
  `;
}

progressChecks.forEach((check) => {
  check.addEventListener("change", updateProgress);
});

startReviewButton?.addEventListener("click", () => {
  document.getElementById("module-7")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

flashcards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

flowToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    activeTrack = toggle.dataset.flowTrack || "login";

    flowToggles.forEach((button) => {
      button.classList.toggle("is-selected", button === toggle);
    });

    renderFlow(activeTrack);
  });
});

flowSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const items = flowTracks[activeTrack];
    const index = Number(step.dataset.flow);
    const item = items[index];

    if (!item) {
      return;
    }

    flowSteps.forEach((button) => button.classList.remove("is-active"));
    step.classList.add("is-active");

    flowOutput.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
  });
});

quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.dataset.correct === "true") {
      quizFeedback.textContent = "Correct. Persistence belongs to the repository layer because that layer manages storage and retrieval.";
      quizFeedback.className = "quiz-feedback is-correct";
      return;
    }

    quizFeedback.textContent = "Not quite. The UI gathers input and the model stores structure, but persistence is the repository's job.";
    quizFeedback.className = "quiz-feedback is-wrong";
  });
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = promptAnswers[button.textContent.trim()];
    promptAnswer.textContent = answer || "Build your answer by stating the principle, naming the evidence, and explaining why the choice helps the system.";
  });
});

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const response = scenarioResponses[button.textContent.trim()];
    if (!response) {
      return;
    }

    scenarioQuestion.textContent = response.question;
    scenarioAnswer.textContent = response.answer;
  });
});

updateProgress();
renderFlow(activeTrack);
