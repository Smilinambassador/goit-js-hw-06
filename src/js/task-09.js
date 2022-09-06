const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorTxt = document.querySelector('.color');

btn.addEventListener('click', onRandomColorChange)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onRandomColorChange(event) {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor;
  colorTxt.textContent = randomColor;
}