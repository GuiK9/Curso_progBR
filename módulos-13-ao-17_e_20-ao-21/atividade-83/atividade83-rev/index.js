const http = require('http')
const url = require('url')
const parse = require('url-parse')
const fs = require('fs')





function handleFile(req, res, callback) {

    let path = parse(req.url).pathname
    let fileName = `.${path}`

    fs.readFile(fileName, (err, data) => {

        if (err) {
            if(callback){
                if(!callback(req, res)){
                    res.writeHead(404, {"Content-Type":"Text/html;charset=UTF8"})
                    res.end("<h1>Página não encontrada</h1>")
                }
            }

        } else {
            res.writeHead(200, {"Content-Type": "Text/html" })
            res.write(data)
            res.end()
        }
    })
}




function handleRequest(req, res) {

    let path = parse(req.url).pathname
    

    if (path == '/teste.html') {
        res.writeHead(200, { "Content-Type": "Text/html" })
        res.write("teste")
        res.end()
        return true
    }

    return false
}



http.createServer((request, response) => {

    let path = parse(request.url).pathname

    handleFile(request, response, handleRequest)

}).listen(3000, err => {

    if (err) console.log(err)

    else console.log('Servidor rodando na porta 3000')

})