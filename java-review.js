const topicButtons = document.querySelectorAll(".topic-button");
const topicOutput = document.getElementById("topic-output");

const topics = {
  encapsulation: {
    tag: "Encapsulation",
    title: "Encapsulation means object data is accessed through controlled methods instead of direct public access.",
    body: "This keeps state more organized and makes future validation easier to add at the access points. In i-Sumbong, getters and setters are the clearest example."
  },
  inheritance: {
    tag: "Inheritance",
    title: "Inheritance allows one class to reuse behavior from a parent class when that relationship makes sense.",
    body: "A simple defense example is App extending JavaFX Application. This shows reuse of framework behavior without needing to re-create the whole startup structure."
  }
};

function renderTopic(topicKey) {
  const topic = topics[topicKey];
  if (!topic || !topicOutput) {
    return;
  }

  topicOutput.innerHTML = `
    <p class="lesson-tag">${topic.tag}</p>
    <h3>${topic.title}</h3>
    <p class="plain-explain">${topic.body}</p>
  `;
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topicKey = button.dataset.topic;

    topicButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });

    renderTopic(topicKey);
  });
});

renderTopic("encapsulation");
