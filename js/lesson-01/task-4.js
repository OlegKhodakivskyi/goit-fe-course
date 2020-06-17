let credit = 23580
let pricePerDroid = 3000
let orderQty = prompt ("Выберите количество!")
let totalPrice = orderQty * pricePerDroid
let balance = credit - totalPrice

if (orderQty !== null ) {
    if (isNaN(orderQty)) {
        console.log("Введите числовое значение"); 
        } else if (!Number.isInteger(Number(orderQty))) {
            console.log("Введите целое числовое значение");
        } else if (Number(orderQty) === 0 ) {
            console.log("Вы ничего не заказали!");
        } else if (Number(totalPrice) > Number(credit)) {
            console.log('Недостаточно средств на счету!');
        } else if (Number(totalPrice) <= Number(credit) && Number(totalPrice) > 0) {
            console.log(`Вы купили ${orderQty} дроидов, на счету осталось ${balance} кредитов.`);
    }
} else console.log(orderQty= "Отменено пользователем!");
