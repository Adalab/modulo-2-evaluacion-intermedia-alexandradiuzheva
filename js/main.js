'use strict';

const main = document.querySelector('.js-main');
const number = document.querySelector('.js-number');
const btn = document.querySelector('.js-btn');
const advice = document.querySelector('.js-advice');
const attempt = document.querySelector('.js-attempt');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }



btn.addEventListener('click', handleClick);
