// Покраска всех карточек

const cardsContainer = document.querySelectorAll ('.card-container');
const changeColorAllCard = document.querySelector ('#change-color-all-card');
const blueColorHash = ' #00FFFF';
const orangeColorHash =' #FFA500';

changeColorAllCard.addEventListener('click', () => {
  cardsContainer.forEach((card) => card.style.backgroundColor = blueColorHash);
})

// Покраска первой карточки

const firstCardContainer = document.querySelector ('.card-container');
const changeColorFirstCard = document.querySelector ('#change-color-first-card');

changeColorFirstCard.addEventListener('click', () => {
  firstCardContainer.style.backgroundColor = orangeColorHash
})

// Открыть страницу Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer == true) {
    window.open('https://google.com')
  }
}

// Вывести в консоль лог

const outputConsoleLogButton = document.querySelector('#output-console-log');

outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('Косоль лог'));

function outputConsoleLog(message) {
  console.log(message)
  alert(message)
}

// При наведении на заголовок - текст выводится в консоли

const titleElement = document.querySelector('.title');

titleElement.addEventListener('mouseover', () => {
  console.log('Заголовок',titleElement.textContent);
})

// Сменить цвет кнопки (Сделал на основе формулы из ChatGPT по другому не смог)

const changeColorButton = document.getElementById('change color');

changeColorButton.addEventListener('click', function() {
  changeColorButton.classList.toggle('color-green');
  changeColorButton.classList.toggle('color-violet');
})