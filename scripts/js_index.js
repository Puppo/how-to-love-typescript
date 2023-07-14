const { getType } = require('../cjs/index')

console.log(getType(1))
console.log(getType('string'))
console.log(getType(() => null))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType({}))
