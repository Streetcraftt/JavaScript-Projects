let randomNumber = Number(Math.trunc(Math.random() * 100 + 1));
let score = 10;

//Unhide Check Button but later hide it when guess is correct
const btnCheckHide = document.querySelector('.hidden');
btnCheckHide.classList.remove('hidden');

//Functions
const currentStatus = function (status) {
  document.querySelector('.output-1').textContent = status;
};

const playerScore = function (currentScore) {
  document.querySelector('.score').textContent = currentScore;
};

const displayRandomNumber = function (randomNumber) {
  document.querySelector('.guess-sign').textContent = randomNumber;
};

const displayMainText = function (mainText) {
  document.querySelector('.guess-number').textContent = mainText;
};

const currentHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
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
    currentStatus('⛔ Please enter a number (1-100)!');
  }

  //Number is out of range
  else if (guessNumber < 1 || guessNumber > 100)
    currentStatus('⛔ Out of range.Choose between 1 and 100!');
  //The Guess is Correct
  else if (guessNumber === randomNumber) {
    const score = Number(document.querySelector('.score').textContent);
    const highscore = Number(document.querySelector('.highscore').textContent);
    currentStatus('🎉YAY, That is correct!');
    bgColor('body', '#60b347');
    displayRandomNumber(randomNumber);
    displayMainText('You Win 🎉🎉');
    if (highscore < score) {
      currentHighScore(score);
    }
    btnCheckHide.classList.add('hidden');
  }

  //The Guess is not correct
  else if (guessNumber !== randomNumber) {
    score--;
    if (score >= 1) {
      currentStatus(guessNumber > randomNumber ? '📈 Too High!' : '📉Too Low!');
      playerScore(score);
    } else {
      currentStatus(`💥 Game Over! The Number was ${randomNumber}`);
      playerScore(0);
      currentHighScore(0);
      bgColor('body', '#df4949');
      displayRandomNumber(randomNumber);
      displayMainText('Game Over!!!');
    }
  }
});

//EVENT 2: To reset everything
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 10;
  randomNumber = Math.trunc(Math.random() * 100 + 1);
  currentStatus('Start Guessing...');
  playerScore(score);
  inputGuess('');
  bgColor('body', '#111');
  displayRandomNumber('?');
  displayMainText('Guess My Number');
  btnCheckHide.classList.remove('hidden');

  //*************to be commented out only for testing ****************/
  // const inputNumber = Number(document.querySelector(".input-number").value);
  // document.querySelector(".guess-sign").textContent = randomNumber;
  // document.querySelector(".output-1").textContent = "📈 Too High!";
  // console.log(randomNumber);
});
