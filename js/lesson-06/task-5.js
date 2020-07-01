import { default as users } from "./users.js";

const getUserWithEmail = (users, email) => {
	let result = users.find((user) => user.email === email)
	return result
};


console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
 // {объект пользователя Elma Head}

// Получить пользоваля (не массив) по email (поле email, он уникальный).



// const getUserWithEmail = (users, email) => {
// 	let result = users.reduce((acc, user) => {
// 		if (user.email === email) {
// 			acc.push(user.name) - повертаю саме имена користувачів, а не об'єкти. 
// 		}
// 		return acc
// 	}, []);
// 	return result
// };