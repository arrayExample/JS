let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congrats...';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Game Over...';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong.';
    lastResult.style.backgroundColor = 'Red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Too low.";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Too high.";
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
  guessSubmit.addEventListener('click', checkGuess);

}

function cleanup(userGuess) {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent.concat('Start New Game', 'The number was: ', userGuess) = 'Start new Game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParams = document.querySelectorAll('. resultParas p');
  for (let i = 0; i < resetParams; i++) {
    resetParams[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;

}
















