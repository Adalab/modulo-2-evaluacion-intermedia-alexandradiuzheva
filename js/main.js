"use strict";

// ELEMENTOS DEL HTML

const userNumberInput = document.querySelector(".js-userNumber");
const tipsElement = document.querySelector(".js-tips");
const btn = document.querySelector(".js-btn");
const attempt = document.querySelector(".js-attempt");

// FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function checkNumbers () {
  const userNumber = parseInt(userNumberInput.value);

  if (isNaN(userNumber) || userNumber > 100 || userNumber < 1) {
    tipsElement.value = 'El número debe estar entre 1 y 100';
  }
  else if (userNumber > randomNumber) {
    tipsElement.value = 'Demasiado alto';
  }
  else if (userNumber < randomNumber) {
    tipsElement.value = 'Demasiado bajo';
  }
  else if (userNumber === randomNumber) {
    tipsElement.value = 'Has ganado campeona!!!';
  }
}

function incrementCounter () {
  attemptCounter++;
  attempt.value = attemptCounter;
}

function handleClick(event) {
  event.preventDefault();

  checkNumbers ();
  
  incrementCounter ();  
}

// EVENTOS 

btn.addEventListener('click', handleClick);

// CÓDIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA (MAIN/GLOBAL)

let attemptCounter = 0;
const randomNumber = getRandomNumber( 100 );
console.log(`Mi número aleatorio es ${randomNumber}`);
