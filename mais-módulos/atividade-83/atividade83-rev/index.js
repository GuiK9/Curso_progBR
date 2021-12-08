const http = require('http')
const url = require('url')
const parse = require('url-parse')
const fs = require('fs')





function handleFile(req, res) {

    let path = parse(req.url).pathname

    if (path == '' || path == '/') {
        path = '/index.html'
    }

    let fileName = `.${path}`

    fs.readFile(fileName, (err, data) => {

        if (err) {

            if (path == '/teste.html') {
                res.writeHead(200, {
                    "Content-Type": "Text/html"
                })
                res.write("teste")
                res.end()
                return
            }

            //res.writeHead(404, {"Content-Type":"Text/html;charset=UTF8"})
            //res.end("<h1>Página não encontrada</h1>")
        } else {
            response.writeHead(200, {
                "Content-Type": "Text/html"
            })
            response.write(data)
            response.end()
        }
    })
}








http.createServer((request, response) => {

    let path = parse(request.url).pathname

}).listen(3000, err => {

    if (err) console.log(err)

    else console.log('Servidor rodando na porta 3000')

})