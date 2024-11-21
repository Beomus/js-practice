/*
parseInt() and parseFloat()

toString()
*/

let num1 = '100'

console.log(parseInt('100'))
console.log(parseInt(num1))
console.log(parseInt('abc')) // -> NaN
console.log(parseInt('0xF')) // hexadecimal num -> 15

let num2 = '1.50'

console.log(parseFloat('1.00'))
console.log(parseFloat(num2))
console.log(parseFloat('abc'))

// numbers after special char are ignored
console.log(parseInt('1.5')) // 1
console.log(parseInt('1 + 1'))

// using template literals
console.log(parseInt(`${1 + 1}`))