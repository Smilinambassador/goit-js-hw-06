const sizeControl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text')

sizeControl.addEventListener('input', (event) => {
    textToChange.style.fontSize = `${event.currentTarget.value}px`
})