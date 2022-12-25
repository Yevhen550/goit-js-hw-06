const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const itemsList = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "");

list.innerHTML = itemsList;

