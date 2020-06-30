import {default as users} from "./users.js";

const getInactiveUsers = users => {
    let result = users.filter (user => user.isActive !== true)
    return result
};

console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Получить массив только неактивных пользователей (поле isActive).