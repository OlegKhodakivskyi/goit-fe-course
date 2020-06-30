    import {default as users} from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    let result = users.filter((user) => user.friends.find((friend) => friend === friendName))
    .map(user => user.name) 
    return result 
}   

console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
 // [ 'Elma Head', 'Sheree Anthony' ]

// Массив имен всех пользователей у которых есть друг с указанным именем.
