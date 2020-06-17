
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt ("Укажите пароль!")

if (message !== null ) {
    if ((message) === (ADMIN_PASSWORD)) {
        console.log(message = "Добро пожаловать!")
        } 

    else if ((message) !== (ADMIN_PASSWORD)) {
        console.log(message = 'Доступ запрещен, неверный пароль!');
    }
} else console.log(message = "Отменено пользователем!");
alert (message);