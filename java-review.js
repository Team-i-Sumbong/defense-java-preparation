const quoteBox = document.getElementById("quote-box");
const quoteAuthor = document.getElementById("quote-author");
const nextQuoteButton = document.getElementById("next-quote");
const topicButtons = document.querySelectorAll(".topic-button");
const topicOutput = document.getElementById("topic-output");

const quotes = [
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  }
];

const topics = {
  abstraction: {
    tag: "Abstraction",
    title: "Abstraction means focusing on the essential role of a component without exposing every low-level detail.",
    body: "In defense, abstraction helps you explain what a class is for before discussing its implementation details. For example, you can describe ReportRepository as the component responsible for persistence before explaining individual methods."
  },
  encapsulation: {
    tag: "Encapsulation",
    title: "Encapsulation means controlling access to object state through methods instead of exposing everything directly.",
    body: "This is why getters and setters matter in Java. They keep objects organized and allow rules to be added at controlled access points when needed."
  },
  inheritance: {
    tag: "Inheritance",
    title: "Inheritance allows one class to reuse or extend behavior from another class.",
    body: "A clear example in JavaFX is how App extends Application. This shows how Java supports reusing framework behavior while allowing project-specific logic."
  },
  polymorphism: {
    tag: "Polymorphism",
    title: "Polymorphism means one interface or parent type can support different concrete behaviors.",
    body: "Even when you do not emphasize it heavily in defense, understanding polymorphism helps explain why Java designs can stay flexible and extensible."
  }
};

let quoteIndex = 0;

function renderQuote() {
  const quote = quotes[quoteIndex];
  quoteBox.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = quote.author;
}

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

nextQuoteButton?.addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  renderQuote();
});

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topicKey = button.dataset.topic;

    topicButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });

    renderTopic(topicKey);
  });
});

renderQuote();
renderTopic("abstraction");
