let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

//CONCEITO DE FACTORY
 function createBook (title, author, pages){
     const book = {
         bookTitle : title,
         bookAuthor : author,
         bookPages : pages,
         printBook: function(){
             console.log('Printing')
         }
     }
     return book
 }

 const book1 = createBook('Atomic', 'James', 306)
 const book2 = createBook('Think', 'Napolean', 450)

//Adicionar Propriedades dentro de um objeto já criado.
 book1.color = 'White'

 console.log(book1, book2)