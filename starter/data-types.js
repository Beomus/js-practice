/*
JS is weakly typed

simple types: number (float), string, boolean, date, func, array, obj
special types: NaN, null, undefined

checking type:
- typeof: -> returns a string of type
- instanceof: -> returns a bool if matches the type
*/

let x = 'something'
x = 1

x = 1 + 'hello'
console.log(x)          // -> 1hello
console.log(typeof(x))  // -> string

let a = 0 == ''   // true, type coerced as both are "false"
let b = 0 === ''  // false, type respected (type safe comparison)

console.log(`${a} and ${b}`)