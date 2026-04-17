let randomNumber = Number(Math.trunc(Math.random() * 100 + 1));
let score = 10;

//Unhide Check Button but later hide it when guess is correct
const btnCheckHide = document.querySelector('.hidden');
btnCheckHide.classList.remove('hidden');

//Functions

const displayText = function (textDisplay, classElement) {
  document.querySelector(classElement).textContent = textDisplay;
};

const inputGuess = function (input) {
  document.querySelector('.input-number').value = input;
};

const bgColor = function (selector, color) {
  document.querySelector(selector).style.backgroundColor = color;
};

//EVENT 1: To check if guess is correct
document.querySelector('.btn-check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.input-number').value);
  // console.log(randomNumber);

  //User didn't input anything
  if (!guessNumber) {
    displayText('⛔ Please enter a number (1-100)!', '.output-1');
  }

  //Number is out of range
  else if (guessNumber < 1 || guessNumber > 100)
    displayText('⛔ Out of range.Choose between 1 and 100!', '.output-1');
  //The Guess is Correct
  else if (guessNumber === randomNumber) {
    const score = Number(document.querySelector('.score').textContent);
    const highscore = Number(document.querySelector('.highscore').textContent);

    displayText('🎉YAY, That is correct!', '.output-1');
    bgColor('body', '#60b347');
    displayText(randomNumber, '.guess-sign');
    displayText('You Win 🎉🎉', '.guess-number');
    if (highscore < score) displayText(score, '.highscore');
    btnCheckHide.classList.add('hidden');
  }

  //The Guess is not correct
  else if (guessNumber !== randomNumber) {
    score--;
    if (score >= 1) {
      displayText(
        guessNumber > randomNumber ? '📈 Too High!' : '📉Too Low!',
        '.output-1',
      );
      displayText(score, '.score');
    } else {
      displayText(`💥 Game Over! The Number was ${randomNumber}`, '.output-1');
      displayText(0, '.score');
      displayText(0, '.highscore');
      bgColor('body', '#df4949');
      displayText(randomNumber, '.guess-sign');
      displayText('Game Over!!!', '.guess-number');
    }
  }
});

//EVENT 2: To reset everything
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 10;
  randomNumber = Math.trunc(Math.random() * 100 + 1);
  displayText('Start Guessing...', '.output-1');
  displayText(score, '.score');
  inputGuess('');
  bgColor('body', '#111');
  displayText('?', '.guess-sign');
  displayText('Guess My Number', '.guess-number');
  btnCheckHide.classList.remove('hidden');
});
