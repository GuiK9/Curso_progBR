const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'application/json'})
    response.end(JSON.stringify({texto: "<h1>Hello World!</h1>"}))
}).listen(3000, err => {
    if(err)
    console.log(err)
    else console.log('servidor rodando na porta 3000')
})