const items = document.querySelectorAll(".item");
console.log("Number of items:", items.length);

const categoriesEl = document.querySelectorAll("#categories > li");
// console.log("categorieItemsEl", categoriesEl);

categoriesEl.forEach((element) => {
  const name = element.firstElementChild.textContent;
  const number = element.lastElementChild.children.length;

  console.log(`Category: ${name}
Elements: ${number}`);
});
