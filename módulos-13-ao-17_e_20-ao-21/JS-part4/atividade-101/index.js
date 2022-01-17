const Person = require('./Person')
const Alumn = require('./Alumn')

let marcos = new Alumn("marcos", 25, "271")

marcos.greetings()


let josé = new Person("josé", 30)

josé.greetings()


//super é sempre a classe "pai", ou a classe em que ele herda alguma propriedade 