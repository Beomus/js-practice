const people = ['a', 'b', 'c']
const one = 1
const str = 'hello'
const b = true
const person = {
    firstName: "a",
    lastName: "b"
}

function sayHello (person) {
    console.log(`Hello ${person}`)
}

console.log('---- typeof ----')
console.log(typeof people) // primitive types, array in JS is an obj
console.log(typeof one)
console.log(typeof b)

console.log('---- instanceof ----')
console.log(people instanceof Array)       // true
console.log(one instanceof Number)         // false, using a literal notation
console.log(str instanceof String)         // false
console.log(b instanceof Boolean)          // false
console.log(person instanceof Object)      // true
console.log(sayHello instanceof Function)  // true

const two = new Number(2) // using constructor

console.log('---- constructor ----')
console.log(typeof two)                // object
console.log(two instanceof Number)     // true

// see more in https://stackoverflow.com/questions/4859800/should-i-be-using-object-literals-or-constructor-functions


let num1 = 1000

console.log(num1 + 1)
console.log(num1 - 100)
console.log(num1 * 10)
console.log(num1 / 1500)
console.log(num1 % 1500)
console.log(++num1)
console.log(--num1)

// use Math object for more advanced stuff
console.log(Math.PI)
console.log(Math.sqrt(num1))
