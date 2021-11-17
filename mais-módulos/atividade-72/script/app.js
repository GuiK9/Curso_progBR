const firebaseConfig = {
    apiKey: "AIzaSyAfETJzMT30INlOHkX3DYhntRPNkX9y0K0",
    authDomain: "colegio-571ed.firebaseapp.com",
    databaseURL: "https://colegio-571ed-default-rtdb.firebaseio.com",
    projectId: "colegio-571ed",
    storageBucket: "colegio-571ed.appspot.com",
    messagingSenderId: "417931129394",
    appId: "1:417931129394:web:c7f745833895f18b49822b",
    measurementId: "G-ZCJ6DWQQQK"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const TURMA = "turma"



db.collection(TURMA).doc("alunoNovo").update({

    faltas: firebase.firestore.FieldValue.increment(3)

}, {
    merge: true
}).then(() => {
    console.log("Documento inserido com sucesso")
}).catch(err => {
    console.log(err)
})



/* db.collection(TURMA).doc("alunoNovo").update({
    nome: "Mariana",
    notas: {nota1: 3.5, nota2: 10},
    sobrenome: "Da Silva",
}).then(() => {
    console.log("Documento inserido com sucesso")
}).catch(err => {
    console.log(err)
})
 */


/* db.collection(TURMA).doc("alunoNovo").set({
    nome: "Mariana",
    notas: {nota1: 3.5, nota2: 10},
    sobrenome: "Da Silva",
}, {
    merge: true
}).then(() => {
    console.log("Documento inserido com sucesso")
}).catch(err => {
    console.log(err)
}) */

/* db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas: {
        nota1: 9.6,
        nota2: 7.5
    }
}).then(doc => {
    console.log("Documento inserido com sucesso ", doc)
}).catch(err => {
    console.log(err)
}) */