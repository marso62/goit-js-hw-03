'use strict'

console.log('Задание 3-1!')

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

console.log(user)
const key = 'mood'
const value = 'happy'

user[key] = value
user.hobby = 'skydiving'
user.premium = false

const keys = Object.keys(user)
for (const key of keys) {
    console.log(`${key}: ${user[key]}`)
}

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`)
// }

// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }
