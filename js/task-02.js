const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");

// const itemsList = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "");

// list.innerHTML = itemsList;

// !==================================

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  list.append(listElement);
}

container.append(list);

// !====================================



