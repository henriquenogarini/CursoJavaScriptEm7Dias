//Esvazia a variável, alterando o valor do let.

let num = [5, 6, 7, 8]

num = []

// Esvaziar a variável declarando sua lenght como 0.
num.length = 0

//Esvaziar uma array utilizando o método splice
num.splice(0, num.length)

console.log(num)