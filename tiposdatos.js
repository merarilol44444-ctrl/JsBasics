//Undefined
//number
//function
//object
//string
//boolean
//symbol
//big int
//null

//undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

//boolean
let descuento = true
console.log(descuento)
console.log(typeof descuento)

//number
let num1 = 7
let num2 = 7.77
let num3 = -7

console.log(num1)
console.log(num2)
console.log(num3)

//string

//Big Int 
const bigNumber = BigInt(354544547587454)
console.log(typeof bigNumber)
//no podemois mesclar number con bigint
const a = 1
const b = 3
console.log(a + b)
console.log(a + bigNumber) //error
//utilizamos conversion
console.log(a + Number(bigNumber))

//symbol
const mySymbol1 = Symbol(30)
const mySymbol2 = Symbol(30)

console.log(mySymbol1 === mySymbol2)
console.log(mySymbol1.valueOf())
console.log(mySymbol2.valueOf())

//null
const myVar = null
console.log(typeof myVar)