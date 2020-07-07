const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];


const ingredientsRef = document.createElement('ul');
ingredientsRef.classList.add('ingredients');

ingredients.forEach(ingredient => {
	const itemsRef = document.createElement('li');
	itemsRef.textContent = ingredient
	ingredientsRef.append(itemsRef)
})

console.log(ingredientsRef);
categories.after(ingredientsRef)

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// 	после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
