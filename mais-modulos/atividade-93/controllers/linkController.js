const Link = require('../models/Link.js')

const redirect = async (req, res, next) => {
    let title = req.params.title
    try {
        let doc = await Link.findOne({ title })
        if (doc) {
            res.redirect(doc.url)
        } else {
            next()
        }
    } catch (err) {

        res.send(err)
    }
}

const addLink = async (req, res) => {
    let link = new Link(req.body)

    try {
        await link.save()
        res.send("Link Adicionado com sucesso")
    } catch (err) {
        console.log(req.body)
        res.render('index', { err, body: req.body })
    }

}

const allLinks = async (req, res) => {

    try {
        let links = await Link.find({})
        res.render('all', { links })
    } catch (err) {
        res.send(err)
    }

}

const deleteLink = async (req, res) => {

    let id = req.params.id
    if (!id) {
        id = req.body.id
    
    }

    try {
        await Link.findByIdAndDelete(id)
        //res.send(id)
        res.redirect('/all')
    } catch (err) {
        res.status(404).send(err)
    }
}



module.exports = { redirect, addLink, allLinks, deleteLink }