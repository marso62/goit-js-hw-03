'use strict'

console.log('Задание 3-2!')

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

// const countProps = function(obj) {
//     const value = Object.values(obj)
//     let sum = 0
//     for (let i = 0; i < value.length; i += 1) {
//         sum += 1
//     }
//     return sum
// }

const countProps = obj => Object.values(obj).length
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})) // 0

console.log(countProps({ name: 'Mango', age: 2 })) // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })) // 3
