var word = document.getElementById("word");
var wrongLetters = document.getElementById("wrong-letters");
var notification = document.getElementById("notification");
var figureParts = document.querySelectorAll(".figure-part");
const popUp = document.getElementById("pop-up");
const msgInfo = document.getElementById("msg-info");

var dictionary = [
  "krishiyana",
  "mathematics",
  "smile",
  "windhill",
  "cape",
  "throwback",
  "loud",
  "block",
  "downfall",
  "jump",
  "dying",
  "weather",
  "knob",
  "backoff",
  "matching",
  "suit",
];
var correctLetters = [];
var incorrectLetters = [];


var selectedWords = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(selectedWords);
var letters = selectedWords.length;
//display letters
function displayWord() {
  word.innerHTML = `
    ${selectedWords
      .split("")
      .map(
        (letter) => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
            </span>`
      )
      .join("")}
    `;
  const innerWord = word.innerText.replace(/\n/g, "");

  if (innerWord === selectedWords) {
    msgInfo.innerHTML = "Congratulations! You won.";
    popUp.style.display = "block";
  }
}
displayWord();




//display wrong letters
function displayWrong() {
  wrongLetters.innerHTML = `
        ${incorrectLetters.length > 0 ? "<h2>Wrong</h2>" : ""}
       ${incorrectLetters.map((letter) => `<span>${letter}</span>`)}
    `;
  displayFigure();

  if (incorrectLetters.length >= figureParts.length) {
    msgInfo.innerHTML = `You lost . The right word is "${selectedWords}"`;
    popUp.style.display = "block";
  }
}
var count = 0;
//display figure parts
function displayFigure() {
  try{
  figureParts[count].style.display = "block";
  count++;
}catch(error) {}
}
//Displays notification sliding from the bottom
function displayNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 1000);
}

// Handle keyboard events
function check(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var character = event.key;

    if (selectedWords.includes(character)) {
      if (!correctLetters.includes(character)) {
        correctLetters.push(character);
        displayWord();
      } else {
        displayNotification();
      }
    } else {
      if (!incorrectLetters.includes(character)) {
        incorrectLetters.push(character);
        displayWrong();
      } else {
        displayNotification();
      }
    }
  }
}
play.addEventListener("click", function () {
  window.location.reload();
});

window.addEventListener("keydown", check);

