// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
// 	то есть элементов li.item.Получится 'В списке 3 категории.'.

const categories = document.querySelector("#categories");
console.log(`В списке ${categories.children.length} категории.`);


const arrayList = document.querySelectorAll(".item");
arrayList.forEach(element => {
	console.log(`Категория:${element.querySelector('h2').textContent}`);
	console.log(`Количество элементов:${element.querySelector('ul').children.length}`);
});


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в
// консоль текст заголовка элемента(тега h2) и количество элементов в категории
// 	(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4