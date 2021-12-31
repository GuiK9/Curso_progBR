const Link = require('../models/Link.js')

const redirect = async (req, res) => {
    let title = req.params.title
    try{
        let docs = await Link.findOne({title})
        console.log(docs)
        console.log(docs.url)
        res.redirect(docs.url)

    } catch(err) {

        res.send(err)
    }
}

const addLink = async(req, res) => {
    let link = new Link(req.body)
    
    try{
        await link.save()
        res.send("Link Adicionado com sucesso")
    } catch (err) {
        console.log(req.body)
        res.render('index', {err, body: req.body})
    }

}


module.exports = {redirect, addLink}