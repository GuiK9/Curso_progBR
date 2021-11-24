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
let auth = firebase.auth()

function ler(){
    db.collection("turma").get().then(snapshot =>{
        snapshot.forEach(aluno => {
            console.log(aluno.data())
        })
    }).catch(err =>{
        console.log(err)
    })
    
}

function escrever(){
    db.collection("turma").add({
        numero: Math.random() * 100
    }).catch(err =>{
        console.log(err)
    })
}

function logIn() {
    let userEmail = "teste@teste.com"
    let userPassword = "123abc" //LOCAL é o browser (tbm é padrão)/ SESSION apenas na aba / NONE caso atualize a página ja n estará logado  

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() =>{
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
            console.log(loggedUser)
            escrever()
        }).catch( err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}
 
function logOut(){
    auth.signOut().then(()=>{
        console.log("usuário foi deslogado")
    }).catch(err => {
        console.log(err)
    })
}
