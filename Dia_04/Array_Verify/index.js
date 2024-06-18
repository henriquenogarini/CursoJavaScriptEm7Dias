const tempLondon = [18, -13, 8, 2]

//Checa todos os valores dentro da array e retorna os negativos
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})

console.log(tempPositive)