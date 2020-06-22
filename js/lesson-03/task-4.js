// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
    const entries = Object.values(employees);
    let totalAmount = 0;

    for (let i = 0; i < entries.length; i +=1 ) {
    totalAmount += entries[i]     
    } return totalAmount;
}

console.log(countTotalSalary({})); // 0
console.log(countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
}),
); // 330

console.log(countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
}),
); // 400