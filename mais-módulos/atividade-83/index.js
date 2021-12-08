const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path/posix')
const parse = require('url-parse')


function handleFile(req, res, callback) {

    let fileName = `.${path}`
    console.log(path)

    if (path == '' && path == "/") {
        path = "/index.html"
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(404, {'content-type': 'text/html; charset=utf-8'})
                    res.end('<h1>Página não encontrada</h1>')
                }
            }

        } else {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write(data)
            res.end()
        }
        return false
    })
}


function handleRequest(req, res) {
    let path = parse(req.url).pathname
    if (path == '/teste') {
        res.end("Teste")
        return true
    }
}


http.createServer((request, response) => {
    handleFile(request, response, handleRequest)
}).listen(3000, err => {
    if (err) console.log(err)
    else console.log('Servidor rodando na porta 3000')
})