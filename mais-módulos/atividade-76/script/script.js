const firebaseConfig = {
    apiKey: "AIzaSyAt82ohRMRbjdHMRZv1ejowQhidzZSEJS8",
    authDomain: "curso-dev-web-9ad10.firebaseapp.com",
    projectId: "curso-dev-web-9ad10",
    storageBucket: "curso-dev-web-9ad10.appspot.com",
    messagingSenderId: "257616200265",
    appId: "1:257616200265:web:c8763dc5cc97dbda68f598",
    measurementId: "G-FWBCMY6ME9"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

//para acessar um arquivo ou uma pasta preciso de uma referência



const ref = storage.ref("images/00012")

console.log(ref.name)
/*
ref.root.listAll().then(res => {
    console.log(res)
})
 */
/* 
ref.parent.child("00268.png").getDownloadURL().then(url => {
    console.log(url)
}) 
 */


/* const fileRef = ref.child("00012.png")

/* fileRef.getDownloadURL().then(url => {
    console.log(url)
}) 

const fileParent = fileRef.parent.parent

fileParent.listAll().then(res => {

    console.log(res)

    res.items[0].getDownloadURL().then(url => {
        console.log(url)
    })

}) */