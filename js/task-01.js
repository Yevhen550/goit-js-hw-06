const listCategories = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${listCategories}`);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} Elements: ${itemsLength}`);
});