'use strict'

console.log('Задание 3-5!')

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
]

// const getAllPropValues = (arr, prop) => arr.prop;     //почему не сработала такая запись?)

const getAllPropValues = (arr, prop) => {
    const value = []
    for (const key of arr) {
        if (prop in key) {
            value.push(key[prop])
        }
    }
    return value
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')) // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')) // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')) // []
