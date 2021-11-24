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



 //login()

function logIn() {
    let userEmail = "novoteste@teste.com"
    let userPassword = "abc123" //LOCAL é o browser (tbm é padrão)/ SESSION apenas na aba / NONE caso atualize a página ja n estará logado  

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() =>{
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser=>{
            console.log(auth.currentUser)
        }).catch( err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}
 



auth.onAuthStateChanged(user => {
    if(user){
        console.log(user)
    }else{
        console.log("Ninguém está logado")
    }
})

function logOut(){
    auth.signOut().then(()=>{
        console.log("usuário foi deslogado")
    }).catch(err => {
        console.log(err)
    })
}

//setTimeout(logIn, 2000)

/* let newUserEmail = "novoteste@teste.com" 
let newUserPassword = "abc123"


auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
    console.log(user)
}).catch(err => {
    console.log(err)
}) */