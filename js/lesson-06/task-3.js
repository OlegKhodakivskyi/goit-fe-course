    import {default as users} from "./users.js";

    const getUsersWithGender = (users, gender) => {
    const result = users.reduce((acc, user) => {
        if (user.gender === gender) {
            acc.push(user.name)
        }
        return acc}, []);
    return result
};

console.log(getUsersWithGender(users, 'male'));

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Получить массив имен пользователей по полу (поле gender).
