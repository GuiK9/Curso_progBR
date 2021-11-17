
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
const db = firebase.firestore() //é um método usado para retornar uma referência para o  banco de dados
//le todos os dados de uma coleção
/*db.collection("turma").get().then((snapshot)=>{

    snapshot.forEach((doc)=>{
        let aluno = doc.data()//outro método JavaScript do firebase
        console.log(aluno.nome) 
    })

}) */

/*let docref = db.collection('turma').doc("edkU1gThMgCswXYaImXk")

docref.get().then((doc) => {
    console.log(doc.data())
})

 let dbRef = db.collection('turma').get().then((snapshot) => {
   return snapshot.docs[0].id
}) */



//aparentemente cda back end terão seus métodos e particularidades próprias
db.collection("turma").where("notas.nota1", ">", 8).get().then(snapshot => {
    snapshot.forEach(doc => {
        console.table(doc.data())
        let aluno = doc.data() 
        console.log(aluno.nome, aluno.sobrenome)
    })
})