// const total = 100;
// const ordered = 50;

let number = prompt ("Укажите количество!")

if (number !== null ) {
    if (Number(number) > 0 && Number(number) <101 ) {
        console.log("Заказ оформлен, с вами свяжется менеджер")
        } 

    else if (Number(number) === 0 ) {
        console.log("Вы ничего не заказали!");
    } else console.log("На складе недостаточно твоаров!")
} else console.log("Заказ отменен!");
