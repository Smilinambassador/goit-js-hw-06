const decrBtnE = document.querySelector('[data-action="decrement"]');
const incrBtnE = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

let counterValue = 0;

decrBtnE.addEventListener("click", (event) => {
  counterValue -= 1;
  return (counterEl.textContent = counterValue);
});

incrBtnE.addEventListener("click", (event) => {
  counterValue += 1;
  return (counterEl.textContent = counterValue);
});
