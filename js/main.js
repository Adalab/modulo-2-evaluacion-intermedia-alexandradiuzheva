'use strict';

const main = document.querySelector('.js-main');
const number = document.querySelector('.js-number');
const btn = document.querySelector('.js-btn');
const advice = document.querySelector('.js-advice');
const attempt = document.querySelector('.js-attempt');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

console.log(getRandomNumber(100));

function handleClick(ev) {
  ev.preventDefault();
  console.log (number.value);

  const check = parseInt(number.value);

if (check === getRandomNumber(100)) {
  advice.value='Has ganado campeona!!!'
}

if (check < getRandomNumber(100)) {
  advice.value='Demasiado bajo';
} else {
  advice.value='Demasiado alto';
}

}

btn.addEventListener('click', handleClick);



