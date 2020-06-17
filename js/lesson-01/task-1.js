// // ----------------Option №1-------------------------

const object = {
    name: 'Генератор защитного поля',
    price: 1000
}
console.log(`Выбран ${object.name} ${object.price} кредитов`);

object.price = 2000;
console.log(`Выбран ${object.name} ${object.price} кредитов`);


// -------------------Option №2----------------------
const name = 'Генератор защитного поля'
let price = 1000

console.log(`Выбран ${name} ${price} кредитов`);

price = 2000
console.log(`Выбран ${name} ${price} кредитов`);

// -------------------Option №3----------------------

// const name = 'Генератор защитного поля'

// const price = {
//     variables: {
//         a: 1000,
//         b: 2000
//     }
// }
// console.log("Выбран " + name + " " + price.variables.a + " кредитов");

// console.log("Выбран " + name + " " +  price.variables.b + " кредитов");






