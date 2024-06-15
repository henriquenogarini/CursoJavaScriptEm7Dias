let num1 = 3
let num2 = 2

console.log(num1 + num2) // Adição
console.log(num1 - num2) // Subtração
console.log(num1 * num2) // Multiplicação
console.log(num1 / num2) // Divisão
console.log(num1 % num2) // Resto
console.log(num1 ** num2) // Exponencial/Quadrado

// ++ --> Incremento
// -- --> Decremento

//Operador de atribuição

num1 += 20
num -= 20

//Operadores de comparação

console.log(num1 > 0) --> true
console.log(num1 < 0) --> false
console.log(num1 >= 3) --> true
console.log(num1 >= 3) --> true
console.log(num1 === 3) --> true
console.log(num1 !== 3) --> false

//Operadores de igualdade

let numero = '1'
let numero2 = 1

console.log(numero === numero2) --> Strict // Verificada a igualdade de valor e type
console.log(numero == numero2) --> Lose // Verifica a igualdade apenas dos caracteres

// Operador ternário

let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'

console.log(speed)

// Operadores Lógicos

let temIdadeMinima = true
let temTituloEleitor = true

let podervotar = temIdadeMinima && temTituloEleitor // && = and/e
console.log("Pode votar: " + podevotar)
let podervotar2 = temIdadeMinima || temTituloEleitor // || = or/ou
console.log("Pode votar : " + podevotar2)

let podeviajar = !podevotar // ! = not ou não
console.log("Pode Viajar: " + podeviajar)

// Operadores Lógicos com Strings

//Programa seletor de cores

let corCliente = 'white'
let corEstoque = 'black'
let corVendida = corCliente || corEstoque // Operador OR

console.log(corVendida)

//Precedencia dos Operadores

let numx = 3 + 4 * 2 // 12
//Porém se colocarmos num = (3+4)*2 = 14

console.log(numx) 

