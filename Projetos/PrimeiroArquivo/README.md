Dia 1  - Anotações

Variáveis :
    let: Variáveis declaradas para escopo de apenas um bloco.
    Além de poder ser sibrescrita.

    const: Variáveis que funcionam em um escopo de bloco, podendo
    somente ser acessadas no bloco de código em que foram declaradas.
    NÃO PODEM SER SOBESCRITAS.

Tipos de Variáveis:
    String: Variável do tipo "texto".

    Ex: let itemName = 'Pen'

    Number: Variável do tipo número, que é utilizada para números apenas.

    Ex: let itemPrice = 3

    Boolean: Variável do tipo "bool", nela é declarado como "true" ou "false"

    EX: let itemAvailable = true

    Undefined: Variável que indica que não foi definido um tipo de variável.

    Ex: let itemColor ou let itemColor = "undefined"

    Null: Variável do tipo nulo, retornando um dado nulo de resposta.

    Ex: let itemName = null

    ASI(Automatic Semi-Column Insertion): Sistema no JS que faz com que
    o código não precise de ";"

JavaScript é dinâmico : O tipo da variável pode se alterar durante o código.

    Não é necessário declarar o tipo de variável, como por ex:

    let String itemName = 'Pen' --> Assim não funcionará
    
    let itemName = 'Pen' --> Variável que o JS entenderá como String, e funciona.

    Dentro do próprio código, pode-se alterar o tipo de variável, como Ex:

    let itemName = 'Pen' --> String

    let itemName = 3 --> Number

    let itemName = true --> Boolean

Objetos: É um grupo de informações referente a apenas uma coisa, possuindo diversas variáveis que servem como propriedades deste objeto.
    Ex:
    
    let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

Arrays: É uma lista que armazena diversos valores, podendo também armazenar valos de tipos diferentes.
Elas também possuem um "index" que é a numeração dos itens.
    Ex: 

    let friends = ["Marcos", "Silvia", "Elisa"]

Funções: Grupo de tarefas, cálculos ou "n" coisas que podem ser feitas dentro de "apenas um bloco de código", que pode ser chamado em qualquer lugar do programa.
Ela exige "um ou vários parâmetros" e receber "um ou mais argumentos"
    Ex:

     function saleStatus(status){           //
    console.log("Transaction" + status)    //FUNÇÃO
 }                                        //

 saleStatus("Approved") //Chamada da função

 function percentage(price){
    return price - (price * 10/100)
 }

 percentage(40)

