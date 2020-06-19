'use strict'

console.log('Задание 3-7!')

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const id = this.transactions.length + 1
        return { id, amount, type }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const objTransaction = transactions.push(
            createTransaction(amount, Transaction.DEPOSIT)
        )
        this.balance += amount
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance < amount) {
            return 'Cнятие такой суммы не возможно, недостаточно средств.'
        }
        const withdrawal = this.balance - amount
        const objTransaction = this.createTransaction(
            withdrawal,
            Transaction.WITHDRAW
        )
        return transactions.push(objTransaction)
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            const moneyTransaction = this.transactions[i]
            if (this.transactions[i] === id) {
                return this.transactions
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        for (const transaction of this.transactions) {
            const total = []
            const allTransaction = 0
            if (type === transaction.type) {
                total = transaction.push(transaction.amount)
                allTransaction += transaction.amount
            }
            return total, allTransaction
        }
    },
}

// console.log(account.deposit(5))
// console.log(account.withdraw(5))
console.log(account.getBalance())
