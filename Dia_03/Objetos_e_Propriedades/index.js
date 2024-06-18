let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

//CONCEITO BÁSICO DE OBJETOS E PROPRIEDADES.
 function createBook (){
     const book = {
     bookTitle : 'Atomic Habits',
     bookAuthor : 'James Clear',
     bookPages : 306,
     bookChapters : {
         chap1: 'Fundamentals',
         chap2: '1st law'
     },
     printBook: function(){
         console.log('Printing')
     }
 }
 }

 //Adicionar Propriedades dentro de um objeto já criado.
 book1.color = 'White'