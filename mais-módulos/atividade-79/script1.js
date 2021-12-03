let fs = require('fs')

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, "UTF8", (err, data) => {

    if (err) throw err

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (err) => {

        if (err) throw err

        console.log("arquivo gerado com sucesso")
        
    })
})