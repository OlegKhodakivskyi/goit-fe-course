    import {default as users} from "./users.js";

const calculateTotalBalance = users => users.reduce ((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); 
// 20916

// Получить общую сумму баланса (поле balance) всех пользователей.
