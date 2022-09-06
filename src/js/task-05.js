const refs = {
  inputEl: document.querySelector("#name-input"),
  nameOutEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameOutEl.textContent = event.currentTarget.value;
  if (refs.nameOutEl.textContent === "") {
    refs.nameOutEl.textContent = "Anonymous";
  }
}
