// Fazendo laços de repetição com JavaScript
//For Loop

for (i = 0; i < 10; i++){
    console.log('Numro', i)
}

// While Loop

i = 10

while (i <= 20){
    console.log('Numero ', i)
    i++
}

// Do While Loop

i = 20
do {
    console.log('Numero ', i)
}while ( i <= 30)

// For Inn Loop
// Mostra o conteúdo/valores do Objeto, com as index e conteúdo.
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])

// For Off Loop
// Mostra apenas o conteúdo/valor da array, sem os index.
const friends = ['Marcos', 'Ana', 'Jose']

for(let i of friends)
    console.log(i)

// While Loop com Break
// O Loop vai parar, assim que o "i" atingir o valor de 8.

let i = 1

while (i <=10){
    if(i === 8) break
    console.log('Numero ', i)
    i++
}