const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputWordsNumberCheck);

function onInputWordsNumberCheck(event) {
    inputEl.classList.add('invalid');
    if(event.currentTarget.value.length >= inputEl.getAttribute('data-length')) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}