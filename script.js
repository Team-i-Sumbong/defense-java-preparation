const progressChecks = document.querySelectorAll(".progress-check");
const progressValue = document.getElementById("progress-value");
const startReviewButton = document.getElementById("start-review");
const flowSteps = document.querySelectorAll(".flow-step");
const flowToggles = document.querySelectorAll(".flow-toggle");
const flowOutput = document.getElementById("flow-output");
const promptButtons = document.querySelectorAll(".prompt-button");
const promptAnswer = document.getElementById("prompt-answer");
const progressStorageKey = "defense-course-progress";

const flowTracks = {
  login: [
    {
      button: "1. UI receives input",
      title: "1. UI receives input",
      body: "AuthPortalView collects the user's email, password, and account type through the visible interface."
    },
    {
      button: "2. Service checks rules",
      title: "2. Service checks rules",
      body: "AuthService validates the credentials and checks account conditions such as verification and access state."
    },
    {
      button: "3. Repository reads data",
      title: "3. Repository reads data",
      body: "The repository provides the stored account data needed by the service to make a decision."
    },
    {
      button: "4. UI shows result",
      title: "4. UI shows result",
      body: "The user either sees an error message or reaches the correct dashboard after the service finishes."
    }
  ],
  report: [
    {
      button: "1. UI receives input",
      title: "1. UI receives input",
      body: "The report form collects the title, description, category, and location from the resident."
    },
    {
      button: "2. Service checks rules",
      title: "2. Service checks rules",
      body: "ReportService validates required fields, prepares IDs, and sets default values before saving."
    },
    {
      button: "3. Repository writes data",
      title: "3. Repository writes data",
      body: "ReportRepository stores the report record, and related repositories can record status history."
    },
    {
      button: "4. UI shows result",
      title: "4. UI shows result",
      body: "The interface confirms that the report was submitted or shows the next visible state to the user."
    }
  ]
};

const promptAnswers = {
  "Why did you separate UI and service classes?":
    "We separated them to follow separation of concerns. The UI handles interaction, while the service layer applies business rules, which makes the system easier to maintain and explain.",
  "Why use repositories instead of putting all logic in the UI?":
    "Repositories isolate persistence. That keeps storage details out of the UI so screen code stays focused on interaction and service code stays focused on rules.",
  "How does the login flow move through the system?":
    "The UI collects input, AuthService checks the rules, the repository provides account data, and the UI shows the final result to the user."
};

let activeTrack = "login";

function loadSavedProgress() {
  try {
    const raw = window.localStorage.getItem(progressStorageKey);
    if (!raw) {
      return;
    }

    const savedModules = JSON.parse(raw);
    if (!Array.isArray(savedModules)) {
      return;
    }

    progressChecks.forEach((check) => {
      const moduleId = check.dataset.module;
      check.checked = savedModules.includes(moduleId);
    });
  } catch (error) {
    console.warn("Unable to load saved progress.", error);
  }
}

function saveProgress() {
  try {
    const completedModules = Array.from(progressChecks)
      .filter((check) => check.checked)
      .map((check) => check.dataset.module)
      .filter(Boolean);

    window.localStorage.setItem(progressStorageKey, JSON.stringify(completedModules));
  } catch (error) {
    console.warn("Unable to save progress.", error);
  }
}

function updateProgress() {
  if (!progressValue) {
    return;
  }

  const total = progressChecks.length;
  const completed = Array.from(progressChecks).filter((check) => check.checked).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  progressValue.textContent = `${percent}%`;

  const ring = document.querySelector(".score-ring");
  if (ring) {
    ring.style.background =
      `radial-gradient(circle closest-side, rgba(11, 25, 40, 0.96) 68%, transparent 69%), conic-gradient(#ffb347 ${percent * 3.6}deg, rgba(255, 255, 255, 0.16) 0deg)`;
  }
}

function renderFlow(trackName) {
  const items = flowTracks[trackName];
  if (!items || !flowOutput || flowSteps.length !== items.length) {
    return;
  }

  flowSteps.forEach((step, index) => {
    step.textContent = items[index].button;
    step.dataset.flow = String(index);
    step.classList.toggle("is-active", index === 0);
  });

  flowOutput.innerHTML = `
    <p class="lesson-tag">Key Idea</p>
    <h3>${items[0].title}</h3>
    <p>${items[0].body}</p>
  `;
}

progressChecks.forEach((check) => {
  check.addEventListener("change", () => {
    saveProgress();
    updateProgress();
  });
});

startReviewButton?.addEventListener("click", () => {
  document.getElementById("module-5")?.scrollIntoView({ behavior: "smooth", block: "start" });
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

    if (!item || !flowOutput) {
      return;
    }

    flowSteps.forEach((button) => button.classList.remove("is-active"));
    step.classList.add("is-active");

    flowOutput.innerHTML = `
      <p class="lesson-tag">Key Idea</p>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
  });
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!promptAnswer) {
      return;
    }

    promptAnswer.textContent =
      promptAnswers[button.textContent.trim()] ||
      "State the principle first, connect it to one class or flow, then explain why the design helps the system.";
  });
});

loadSavedProgress();
updateProgress();
renderFlow(activeTrack);
