import {Balanced} from './Balanced.js'

console.log(Balanced('(') === false)
console.log(Balanced(')') === false)
console.log(Balanced('()') === true)
console.log(Balanced('()()') === true)
console.log(Balanced(')(') === false)
console.log(Balanced('())(')===false)
