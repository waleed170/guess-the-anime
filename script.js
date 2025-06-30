const questions = [
  {
    q: "Does your character wear a straw hat?",
    char: "luffy"
  },
  {
    q: "Can your character transform into a Super Saiyan?",
    char: "goku"
  },
  {
    q: "Can your character transform into a Titan?",
    char: "eren"
  },
  {
    q: "Does your character have a Nine-Tailed Beast?",
    char: "naruto"
  },
  {
    q: "Is your character extremely loud and energetic?",
    char: "naruto"
  },
  {
    q: "Does your character love to eat a lot?",
    char: "goku"
  },
  {
    q: "Is your character the captain of a pirate crew?",
    char: "luffy"
  },
  {
    q: "Is your character known for shouting about freedom or fighting the system?",
    char: "eren"
  }
];

const characters = {
  naruto: {
    name: "Naruto Uzumaki",
    image: "assets/images/naruto.jpg"
  },
  luffy: {
    name: "Monkey D. Luffy",
    image: "assets/images/luffy.jpg"
  },
  goku: {
    name: "Goku",
    image: "assets/images/goku.jpg"
  },
  eren: {
    name: "Eren Yeager",
    image: "assets/images/eren.jpg"
  }
};

let currentIndex = 0;
let scores = {
  naruto: 0,
  luffy: 0,
  goku: 0,
  eren: 0
};

const stepIntro = document.getElementById("step-intro");
const stepQuestions = document.getElementById("step-questions");
const stepResult = document.getElementById("step-result");

const questionText = document.getElementById("question-text");
const answerBtns = document.querySelectorAll(".answer-btn");
const startBtn = document.getElementById("start-btn");

const characterName = document.getElementById("character-name");
const characterImage = document.getElementById("character-image");

startBtn.addEventListener("click", () => {
  stepIntro.classList.add("hidden");
  stepQuestions.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  if (currentIndex < questions.length) {
    questionText.textContent = questions[currentIndex].q;
  } else {
    makeGuess();
  }
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.getAttribute("data-answer");
    const characterKey = questions[currentIndex].char;

    if (answer === "yes" && characterKey) {
      scores[characterKey]++;
    }

    currentIndex++;
    showQuestion();
  });
});

function makeGuess() {
  // Find the character with the highest score
  const bestMatch = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const character = characters[bestMatch];

  characterName.textContent = character.name;
  characterImage.src = character.image;

  stepQuestions.classList.add("hidden");
  stepResult.classList.remove("hidden");
}
