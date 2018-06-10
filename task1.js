/*1. Фильтр блокировок
Реализовать функцию, исключающую из входного строки русские буквы Р, К и Н в любом регистре.
На вход подается строка длины n. 1 <= n <= 10000

Пример
> node task.js 'Окраина'
> Оаиа */

const strIn = process.argv[2];
const re = /\[Р|Н|К|р|н|к]/gi;
console.log(strIn.replace(re, ''));
