class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greetings(){
        console.log("olá, tudo bom? meu nome é", this.name)
    }
}

module.exports = Person
