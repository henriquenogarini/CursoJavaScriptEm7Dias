//Array Convencional
const friends = ['Marcos', 'Ana', 'Marcela']
const num = [1, 2, 3, 4, true]

console.log(friends)

//Adicionando dados na Array.

const numbers = [7, 8, 9]

//Adiciona Valores no final da Array.
numbers.push(10, 11, 12)

//Adiciona Valores no início da Array.
numbers.unshift()

//Adiciona Valores de acordo com o indicado, sendo o primeiro número
//o index de início e em seguida quantos números que quero deletar,
//antes de começar a adicionar
num.splice(3, 0, 4, 5, 6)

console.log(num)

//Encontrando ítens dentro da array.

const numx = [6, 7, 8, 9]

console.log(numx.indexOf(8))
console.log(numx.includes(4))


