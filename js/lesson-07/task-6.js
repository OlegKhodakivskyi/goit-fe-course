const inputRef = document.querySelector("#validation-input");

let checkValid = (event => {
	if (event.target.value.length === 6) {
		inputRef.classList.add("valid");
		inputRef.classList.remove("invalid");
	}
	else if (event.target.value.length < 6) {
		inputRef.classList.add("invalid");
		inputRef.classList.remove("valid");
	}
	// else if (event.target.value.length === 0) {
	// 	inputRef.classList.add("defult");
	// 	inputRef.classList.remove("valid");
	// 	inputRef.classList.remove("invalid");
	// }
});

inputRef.addEventListener('blur', checkValid);


// ? Напиши скрипт, который бы при потере фокуса на инпуте,
// ? проверял его содержимое на правильное количество символов.

// ? Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// ? Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// ? Для добавления стилей, используй CSS - классы valid и invalid.

