
function speakGeneric(){
    console.log(this.sound)
}




let dog = {
    sound: "au au",
    speak: speakGeneric
}
let cat = {
    sound: "meaw",
    speak: speakGeneric
}


dog.speak()
cat.speak()

let bindedfunction = speakGeneric.bind(dog) //dá um contexto pro this

bindedfunction()
