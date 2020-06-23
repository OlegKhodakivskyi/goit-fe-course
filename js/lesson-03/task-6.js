const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
    let totalPrice= 0;
    let lengthCheck = allProducts.length;      // --- якщо немає додавання чи віднімання в циклі for, визначення довижини массива краще виноисти в окрему зміну. 

    for (let i = 0; i < lengthCheck; i +=1) {
        const entries = Object.values(allProducts[i]);  
        // console.log(entries);      
        if (entries.includes(productName)) {
            totalPrice = entries[1] * entries[2];
        }
    }
    return totalPrice;
}


console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800



// Напиши функцию calculateTotalPrice(allProdcuts, productName), 
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
