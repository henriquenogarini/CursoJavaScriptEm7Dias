console.log("JavaScript Funcionando")

//Testando variáveis

let firstName = "Henrique"
let lastName = "Nogarini"
console.log(firstName)
console.log(lastName)

//Testando Consts

const price = 30
// price = 20 --> vai dar erro, pois é constante
console.log(price)

//Tipos de variáveis

let itemName = 'Pen' --> String
let itemPrice = 3 --> Number
let itemAvailable = true --> Boolean
let itemColor = undefined --> undefined
itemName = null --> null

//Objetos

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue'

console.log(pen.itemName)

//Arrays

 let friends = ["Marcos", "Silvia", "Elisa"]

 console.log(friends)

 //Funções

 function saleStatus(status){           //
    console.log("Transaction" + status) //FUNÇÃO
 }                                      //

 saleStatus("Approved") //Chamada da função

 function percentage(price){
    return price - (price * 10/100)
 }

 console.log(percentage(40))