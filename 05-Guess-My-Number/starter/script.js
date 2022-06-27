'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    //Change background color when correct guess
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Change width of class number when correct guess
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        `${guess > secretNumber ? `Guess is too high!` : `Guess is too low!`}`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
    }
  }
}); //listen to value in input and display it in console

//Function for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  guess = document.querySelector('.guess').value = '';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
