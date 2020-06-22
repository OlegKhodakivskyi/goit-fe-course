let input;
let total = 0;

do {
    input = prompt ("Введите число!")

    if (isNaN(input)) {
        console.log("Введите числовое значение");
    } else total += Number(input)
}

while (input !==null)
alert(`Общая сумма чисел равна ${total}`)