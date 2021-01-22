'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const generateSecretNum = function () {
  const secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNum;
  return secretNum;
};

let secretNumber = generateSecretNum();
let attemts = 20;
let won = false;
let highscore = 0;

document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    reduceAttempts(1);
  } else {
    if (guess > secretNumber) {
      reduceAttempts(2);
    } else if (guess < secretNumber) {
      reduceAttempts(3);
    } else {
      wonFunc();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  attemts = 20;
  won = false;
  document.querySelector('.score').textContent = attemts;
  secretNumber = generateSecretNum();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

const wonFunc = function () {
  if (!won) {
    won = true;
    if (highscore < attemts) {
      highscore = attemts;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'hoorah';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
};

const reduceAttempts = function (condition) {
  if (!won) {
    if (attemts > 0) {
      attemts--;
      document.querySelector('.score').textContent = attemts;
      if (condition === 1) {
        document.querySelector('.message').textContent = 'no number';
      } else if (condition === 2) {
        document.querySelector('.message').textContent = 'too high';
      } else if (condition === 3) {
        document.querySelector('.message').textContent = 'too less';
      }
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  }
};
