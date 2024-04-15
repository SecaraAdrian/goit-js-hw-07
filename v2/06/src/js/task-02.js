const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = document.getElementById("ingredients");
const fragment = document.createDocumentFragment(); 

for (let i = ingredients.length - 1; i >= 0; i--) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  listItem.classList.add("item");
  listItem.dataset.index = -(i + 1); 
  fragment.appendChild(listItem); 
}

ingredientsList.appendChild(fragment);