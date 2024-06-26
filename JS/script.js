import { isWordNNumbers, isWord, FullCheck } from "./validation.js";

// DOM method
function $(selector) {
  return document.querySelector(selector);
}

let wordArray = [];
let guessArray = [];
let nClicks = 0;

async function getRandomFiveLetterWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1&length=5"
  );
  if (response.ok) {
    const data = await response.json();
    return data[0];
  } else {
    throw new Error("Failed to fetch the word");
  }
}

getRandomFiveLetterWord()
  .then((word) => {
    console.log(`Random 5-letter word: ${word}`);
    wordArray = word.split("");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// get the elements
let guess = $("#guess");
let guessBtn = $("#guessBtn");
const elements = [
  ["#w1l1", "#w1l2", "#w1l3", "#w1l4", "#w1l5"],
  ["#w2l1", "#w2l2", "#w2l3", "#w2l4", "#w2l5"],
  ["#w3l1", "#w3l2", "#w3l3", "#w3l4", "#w3l5"],
  ["#w4l1", "#w4l2", "#w4l3", "#w4l4", "#w4l5"],
  ["#w5l1", "#w5l2", "#w5l3", "#w5l4", "#w5l5"],
];

// check the input for the word
guessBtn.addEventListener("click", function () {
  if (FullCheck(guess.value, 5)) {
    if (nClicks < 5) {
        checkLetter(nClicks);
        nClicks++;
      }
  }
  else {
    alert("Invalid input. Please enter a 5-letter word.");
  }
});

function checkLetter(n) {
  updateGuessArray();
  const currentRow = elements[n];
  console.log("Current row: ", currentRow);
  console.log();

  for (let i = 0; i < currentRow.length; i++) {
    const cell = $(currentRow[i]);
    const guess = guessArray[i]; // Adjust index if needed

    cell.innerHTML = guess;
    console.log("Guess: ", guess);

    if (guess === wordArray[i]) {
      cell.classList.add("grid-item-correct");
    } else if (wordArray.includes(guess)) {
      cell.classList.add("grid-item-wrong");
    } else {
      cell.classList.add("grid-item");
    }
  }
}

// Update guessArray with current guess
function updateGuessArray() {
  guessArray = guess.value.toLowerCase().split("");
  guess.value = "";
  console.log("Guess array: ", guessArray);
}

guessBtn.addEventListener("Click", function () {
    if (FullCheck(guess.value, 5)) {
    updateGuessArray();
  }
  else {
    alert("Invalid input. Please enter a 5-letter word.");
  }
});

guess.addEventListener("keypress", function (e) {
  if (FullCheck(guess.value, 5)) {
    if (e.key === "Enter") {
      if (nClicks < 5) {
        checkLetter(nClicks);
        nClicks++;
      }
      updateGuessArray();
    }
  }
  else {
    alert("Invalid input. Please enter a 5-letter word.");
  }
});
