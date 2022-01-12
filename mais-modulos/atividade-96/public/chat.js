const socket = io('http://localhost:3000')

socket.on("Update_messages", (messages)=>{
    updateMessagesOnScream()
})


function updateMessagesOnScream() {
    const div_messages = document.querySelector('#messages')

    let list_messages = '<ul>' 
    messages.forEach(message => {
        list_messages += `<li>${message}</li>`
    });
    list_messages += '</ul>'


    div_messages.innerHTML = list_messages
}