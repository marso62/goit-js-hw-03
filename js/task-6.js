console.log('Задание 3-6!');

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и
// имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 2700, quantity: 3 },
  { name: 'Радар', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let total = 0;
  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    if (name === productName) {
      total += price * quantity;
    }
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
