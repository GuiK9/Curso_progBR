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


let ids = []
let collection = db.collection(TURMA)

collection.get().then(snapshot => {
    snapshot.forEach(doc => {
        ids.push(doc.id)
    })
    //criarCidades(ids)
})

/*function criarCidades(ids){
    for(let id of ids){
         console.log(1)
         db.collection(TURMA).doc(id).update({
            cidades: ["Rio De Janeiro", "Minas Gerais", "Sao Paulo"]
        })
    }
} */


function apagarCampos(ids){

    for(let id of ids){
        console.log(1)
        db.collection(TURMA).doc(id).update({
           cidades: firebase.firestore.FieldValue.delete()
       })
   }

}











/* db.collection(TURMA).doc("alunoNovo").delete({
    cidades: []
}).then(() => {
    console.log("documento apagado com sucesso")
}).catch(err => {
    console.log(err)
}) */






/* let docRef = db.collection(TURMA).doc("H2UPtpPcRrPqSJW9Ninw")

docRef.onSnapshot(snapshot => {
    console.log(snapshot.data().nome)
}) */

/* db.collection(TURMA).onSnapshot(snapshot => {

    snapshot.forEach(doc => {
        let aluno = doc.data()
        console.log(aluno)
    })

})
 */

/* db.collection(TURMA).doc("alunoNovo").update({

    faltas: firebase.firestore.FieldValue.increment(3)

}, {
    merge: true
}).then(() => {
    console.log("Documento inserido com sucesso")
}).catch(err => {
    console.log(err)
})
 */


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