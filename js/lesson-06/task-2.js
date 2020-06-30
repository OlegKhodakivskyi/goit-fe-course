    import {default as users} from "./users.js";

const getUsersWithEyeColor = (users, color) => {
    let result = users.filter (user => user.eyeColor === color)
    return result
};

console.log(getUsersWithEyeColor(users, 'blue')); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

